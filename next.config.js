/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
        "www.google.com"
    ]
  },
  experimental : {
    fontLoaders :[
      {loader : '@next/font/google', options : {subsets:['latin']}}
    ]
  },
  rewrites(){
    return [
      {
        destination : "",
        source : ""
      }
    ]
  }
}

module.exports = nextConfig
