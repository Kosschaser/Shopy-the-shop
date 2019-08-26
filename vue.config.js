const path = require('path');


module.exports = {
  css:{
    loaderOptions:{
      sass:{
        data:
          `
          @import './src/scss/_variables.scss';
          @import './src/scss/_reset.scss';
          @import './src/scss/_common.scss';
          `
      }
    }
  },
    configureWebpack: (config) => {
        config.devtool = 'eval-source-map'
    },
    publicPath: '/'
};
