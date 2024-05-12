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
        return config;
    }
};

export default withNextIntl(nextConfig);