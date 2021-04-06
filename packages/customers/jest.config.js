module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/src/jestSetup.js"],
  collectCoverageFrom: ["<rootDir>/src/**/*.js"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
