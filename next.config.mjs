import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  trailingSlash: true,
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/oliviawarner.github.io/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/oliviawarner.github.io' : '',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.output.publicPath = process.env.NODE_ENV === 'production' ? '/oliviawarner.github.io/_next/' : '/_next/';
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
