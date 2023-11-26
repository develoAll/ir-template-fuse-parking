const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const moduleFederationConfig = withModuleFederationPlugin({

  name: 'ir-hr-parking-micro-webapp', /*** __MODIFY__ (webapp project name) ***/
  
  // here you can expose your components and modules:
  exposes: {
    './appRoutes': './src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

moduleFederationConfig.output.publicPath='http://localhost:4207/'; /*** __MODIFY__ (port) ***/

module.exports =  moduleFederationConfig;