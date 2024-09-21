/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  moduleNameMapper: {
    '^next$': require.resolve('next'),
    '^next/navigation$': require.resolve('next/navigation'),
  },
  testEnvironment: 'jsdom',
  rootDir: 'src',
};

export default createJestConfig(config);
