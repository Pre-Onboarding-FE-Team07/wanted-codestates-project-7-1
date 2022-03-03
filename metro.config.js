module.exports = {
  resolver: { sourceExts: ['jsx', 'js', 'tsx', 'ts'] },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
};
