module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["./jest.setup.js"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/index.ts",
    "!<rootDir>/src/bootstrap.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
