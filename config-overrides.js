const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
  alias({
    '@img': 'src/assets/img',
    '@fonts': 'src/assets/fonts',
    '@components': 'src/components',
    '@layout': 'src/components/layout',
    '@container': 'src/components/container',
    '@assets': 'src/assets',
    '@store': 'src/store',
    '@utils': 'src/utils',
    '@views': 'src/views',
  })(config)
  return config;
}