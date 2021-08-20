// jest.config.ts
import type { Config } from '@jest/types';

// Синхронно загружаемый конфиг
const config: Config.InitialOptions = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "@my/custom-package/src/(.*)": "@my/custom-package/dist/$1"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
    "^node_modules.+\\.(svg)$"
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect", "./src/__test__/setupTests.ts"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"]
};

export default config;
