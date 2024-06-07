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
  basePath: '/oliviawarner.github.io', // Repository name
  assetPrefix: '/oliviawarner.github.io/', // Repository name
  webpack: (config) => {
    config.output.publicPath = '/oliviawarner.github.io/_next/'; // Correct public path for GitHub Pages
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
