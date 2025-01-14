/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Wenn du externe Domains brauchst
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    unoptimized: false,
    // Lokale Bilder brauchen keine remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Füge diese Einstellung hinzu, um die Bildoptimierung zu verbessern
  experimental: {
    optimizeImages: true,
    optimizeCss: true,
  },
};

export default nextConfig;
