export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === "OPTIONS") {
      return corsResponse(null, 204);
    }

    if (request.method !== "POST") {
      return corsResponse(JSON.stringify({ error: "Method not allowed" }), 405);
    }

    try {
      const { recoveryType, collectionAddress, deliveryAddress, telephone, vehicleReg } =
        await request.json();

      const message =
        `New Quote Request via ${env.SITE_NAME}\n\n` +
        `Recovery Type: ${recoveryType}\n` +
        `Collection:     ${collectionAddress}\n` +
        `Delivery:       ${deliveryAddress}\n` +
        `Telephone:      ${telephone}\n` +
        `Vehicle Reg:    ${vehicleReg}`;

      const params = new URLSearchParams({
        To:   env.OWNER_PHONE,
        From: env.TWILIO_PHONE,
        Body: message,
      });

      const twilioRes = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Basic " + btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`),
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        }
      );

      if (!twilioRes.ok) {
        const err = await twilioRes.text();
        console.error("Twilio error:", err);
        return corsResponse(JSON.stringify({ success: false, error: "SMS failed" }), 500);
      }

      return corsResponse(JSON.stringify({ success: true }), 200);
    } catch (err) {
      console.error("Worker error:", err);
      return corsResponse(JSON.stringify({ success: false, error: err.message }), 500);
    }
  },
};

function corsResponse(body, status) {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
