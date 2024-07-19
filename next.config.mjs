/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    distDir: "out",    // <=== changes the build directory
    images: {
      unoptimized: true,
    }
  };
  
  export default nextConfig;