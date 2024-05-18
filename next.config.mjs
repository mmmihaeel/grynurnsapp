import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    devIndicators: {
        buildActivity: false,
    },
    productionBrowserSourceMaps: false,
    reactStrictMode: false,
    compress: true,
    poweredByHeader: false,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

export default withNextIntl(nextConfig);