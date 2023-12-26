import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '.+\\.(png|jpg)$': 'identity-obj-proxy',
    '^@root(.*)$': '<rootDir>/src$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
