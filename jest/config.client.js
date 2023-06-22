const config = {
    collectCoverageFrom: ["<rootDir>/src/**/*.{js,jsx}"],
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/jest/mocks/stylesheet.js",
    },
    resetMocks: true,
    rootDir: "../",
    testEnvironment: "jsdom",
    testMatch: ["<rootDir>/tests/**/**.test.{js, jsx}"],
};

module.exports = config;
