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
  swcMinify : true,//swc를 활성화하여 생성되는 javascript 를 최소화하는 option
  compiler : {
    removeConsole : { //console call 제거 ,
      exclude : ['log']//제거 대상에서 해당 레벨을 제외
    },
    styledComponents : false,
    emotion : false
  }
}

module.exports = nextConfig
