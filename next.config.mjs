/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/admin',
          destination: '/admin/index.html',
        },
        {
          source: '/admin/',
          destination: '/admin/index.html',
        },
      ],
    }
  },
}
export default nextConfig
