/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "dummyimage.com",
          pathname: "/**"
        },
        {
          protocol: "https",
          hostname: "encrypted-tbn0.gstatic.com",
          pathname: "/**"
        },
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
          pathname: "/**"
        },

      ],
    },
    // experimental: {
    //   missingSuspenseWithCSRBailout: false,
    // },
  };
  
  export default nextConfig;
  