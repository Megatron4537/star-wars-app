module.exports = {
  verbose: true,
  preset: 'react-native',
  coverageDirectory: '__tests__/coverage',
  collectCoverageFrom: ['./src/**'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  testMatch: ['**/__tests__/**.spec.tsx'],
  transform: {},
};
