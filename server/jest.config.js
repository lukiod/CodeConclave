// server/jest.config.js
module.exports = {
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
    testMatch: ['**/tests/**/*.test.js'],
    testPathIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: ['./tests/setup.js'],
    collectCoverageFrom: [
      'controllers/**/*.js',
      'middleware/**/*.js',
      'models/**/*.js',
      'routes/**/*.js',
      'utils/**/*.js'
    ]
  };