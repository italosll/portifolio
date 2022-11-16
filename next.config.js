/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  extends: 'google',
 
  quotes: [2, 'single'],
  globals: {
    SwaggerEditor: false
  },
  env: {
    browser: true
  },
  rules:{
    "linebreak-style": 0
  }
}

module.exports = nextConfig
