/** @type {import('next').NextConfig} */
const nextConfig = {};

import withVideos from "next-videos";

export default {
  ...nextConfig,
  ...withVideos(),
};
