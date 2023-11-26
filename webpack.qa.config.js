const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const moduleFederationConfig = withModuleFederationPlugin({
  // here you can expose your components and modules:
  name: 'ir-hr-parking-micro-webapp', /*** __MODIFY__ (webapp name) ***/
  
  exposes: {
    './appRoutes': './src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

moduleFederationConfig.output.publicPath='http://10.20.12.165:4207/parking/'; /*** __MODIFY__ (port & path) ***/

module.exports =  moduleFederationConfig;