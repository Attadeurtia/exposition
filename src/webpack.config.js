module.exports = {
  // ... autres configurations
  module: {
    rules: [
      // ... autres règles
      {
        test: /\.md$/,
        use: 'markdown-loader'
      }
    ]
  }
};