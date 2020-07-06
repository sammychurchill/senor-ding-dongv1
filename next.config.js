module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          dns: 'empty'
        }
      }
  
      return config
    }
  }