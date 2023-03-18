"use strict";

// next.config.js
var nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_AUTH_DOMAIN: process.env.GOOGLE_AUTH_DOMAIN,
    GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
    GOOGLE_STORAGE_BUCKET: process.env.GOOGLE_STORAGE_BUCKET,
    GOOGLE_MESSAGING_SENDER_ID: process.env.GOOGLE_MESSAGING_SENDER_ID,
    GOOGLE_APP_ID: process.env.GOOGLE_APP_ID,
    GOOGLE_MEASUREMENT_ID: process.env.GOOGLE_MEASUREMENT_ID
  }
};
module.exports = nextConfig;
