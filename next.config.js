const nextConfig = {
  reactStrictMode: true,
  env: {
    FIREBASE_DEPLOYMENT_ENVIRONMENT:
      process.env.FIREBASE_DEPLOYMENT_ENVIRONMENT,
  },
};

module.exports = nextConfig;
