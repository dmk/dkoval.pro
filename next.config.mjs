// const BuildAnalizer = (await import('@next/bundle-analyzer')).default;

// const withBundleAnalyzer = BuildAnalizer({
//   enabled: process.env.ANALYZE === 'true',
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

// export default withBundleAnalyzer(nextConfig);
export default nextConfig;
