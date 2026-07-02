import dotenv from "dotenv";
import fs from "fs";
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const envPath = process.env.NODE_ENV === "production" ? ".env" : ".env.local";
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  env: {
    HDCTOOL_BASE_URL: process.env.HDCTOOL_BASE_URL,
    HDCTOOL_EMAIL: process.env.HDCTOOL_EMAIL,
    HDCTOOL_PASSWORD: process.env.HDCTOOL_PASSWORD,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kolleris.b-cdn.net",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
