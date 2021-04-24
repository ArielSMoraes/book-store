module.exports = {
  testEnvironment: 'jest-environment-node',
  transform: {},
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts']
};