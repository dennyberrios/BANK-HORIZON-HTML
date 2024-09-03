module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@styles': './src/styles'
          }
        }
      ]
    ]
  };  