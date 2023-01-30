const nextJest = require('next/jest')

const createJestConfig = nextJest({
    //Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    //테스트 환경에서 next.config.js 및 .env 파일을 로드할 next.js 앱의 경로를 설정
    dir : './',
})


//jest config 지정
/** @type {import('jest').Config} */
const customJestConfig = {
    //각 테스트를 실행하기 전에 설정 옵션을 추가한다
    //모듈의 위치 경로를 삽입하는것이다. 기본적으로 node_modules를 사용하는
    // 이외의 다른 모듈을 사용하면 넣어주면 된다,
    moduleDirectories : ['node_modules','<rootDir>/'],

    //baseUrl과 같은 설정이 없기 때문에 moduleNameMapper 옵션을 통해 src에 대한 위치를 지정해 주어야 합니다.
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@pages/(.*)$': '<rootDir>/pages/$1',
        '^@styles/(.*)$': '<rootDir>/styles/$1',
        '^@public/(.*)$': '<rootDir>/public/$1',
    },

    //테스팅 되는 환경을 정의 하여 줍니다.
    //기본값은 "node" 입니다. 만약에 웹앱과 같은 브라우저 환경에서 테스트 되어야 한다면 "jsdom" 옵션을 주면 됩니다.
    testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)