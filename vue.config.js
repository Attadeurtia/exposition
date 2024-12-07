// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/exposition/' : '/',

  chainWebpack: (config) => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  },
};
