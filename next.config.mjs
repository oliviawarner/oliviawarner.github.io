import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: './', // Add this line to ensure assets are correctly referenced
  webpack: (config) => {
    config.output.publicPath = './_next/'; // Adjust the public path
    return config;
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
