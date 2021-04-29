module.exports = {
  testEnvironment: 'jest-environment-node',
  transform: {},
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: "(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$",
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts']
};