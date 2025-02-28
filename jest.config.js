// client/jest.config.js
export default {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': [
        'babel-jest',
        {
          presets: [
            ['@babel/preset-env', { targets: { node: 'current' } }],
            '@babel/preset-react'
          ]
        }
      ]
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.js'],
    testMatch: ['<rootDir>/src/**/*.test.(js|jsx|ts|tsx)'],
    coveragePathIgnorePatterns: ['/node_modules/', '/src/__tests__/']
  };