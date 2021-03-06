module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["./jest.setup.js"],
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
