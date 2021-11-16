module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@style': './src/style',
          '@assets': './src/assets',
          '@queries': './src/queries',
          '@providers': './src/providers',
        },
      },
    ],
  ],
};
