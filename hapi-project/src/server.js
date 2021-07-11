/* eslint-disable linebreak-style */
/* eslint-disable no-console */

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server(
    {
      port: 666,
      host: 'localhost',
      routes: {
        cors: {
          origin: ['*'],
        },
      },
    },
  );
  server.route(routes);

  await server.start();
  console.log(`Running ${server.info.uri}`);
};

init();
