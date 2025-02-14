export default {
    testEnvironment: 'jsdom',
    transform: {
    '^.+\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
    '\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\.svg$': 'jest-transform-svg',
    '@/(.*)$': '<rootDir>/src/$1'
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    preset: 'ts-jest',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    globals: {
    'ts-jest': {
    tsconfig: 'tsconfig.json'
    }
    }
    };