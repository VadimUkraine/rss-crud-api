const config = {
  testEnvironment: 'node',
  coverageProvider: 'v8',
  testMatch: ['**/__tests__/**/*.test.js'],
  testPathIgnorePatterns: ['/__tests__/moks/', '/public/'],
  transformIgnorePatterns: ['/node_modules/'],
  verbose: true,
  moduleFileExtensions: ["js"],
};

export default config;
