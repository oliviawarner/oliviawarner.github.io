import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/oliviawarner.github.io' : '',
  assetPrefix: isGithubPages ? '/oliviawarner.github.io/' : '',
  webpack: (config) => {
    config.output.publicPath = isGithubPages ? '/oliviawarner.github.io/_next/' : '/_next/';
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
