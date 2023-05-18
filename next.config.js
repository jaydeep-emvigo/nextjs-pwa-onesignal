/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  importScripts: ['https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js'],
})

module.exports = withPWA(nextConfig)
