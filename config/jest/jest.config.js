// External libraries
const path = require('path');

module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js', '!src/components/index.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  rootDir: process.cwd(),
  setupTestFrameworkScriptFile: '<rootDir>/config/jest/setupTests.js',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).js?(x)'
  ],
};
