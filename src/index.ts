// @ts-nocheck
/**
 * @amlplugins/sendgrid-inbound-parse
 *
 * Thin re-export of @sendgrid/client (untyped CommonJS SDK — no .d.ts shipped upstream).
 *
 * SendGrid Inbound Parse Webhook — parse inbound email and POST as multipart/form-data to your endpoint.
 */

import _sdk from "@sendgrid/client";
export { _sdk as sdk };
export default _sdk;
