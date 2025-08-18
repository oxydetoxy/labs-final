import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images for faster builds
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/webp', 'image/avif'],
  },
  
  // Enable SWC for faster compilation
  swcMinify: true,
  
  // Optimize bundle
  experimental: {
    optimizePackageImports: ['@react-three/fiber', '@react-three/drei', 'three'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize for development
    if (dev) {
      config.devtool = 'eval-cheap-module-source-map';
    }
    
    return config;
  },
};

export default nextConfig;
