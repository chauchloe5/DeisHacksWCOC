//import dotenv from 'dotenv';
import express from 'express';
import { json } from 'body-parser';

(async () => {
  const app = express()
  const PORT = 5000;

  app.use(json())

  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
  })
})();


// // load the environment variables from the .env file
// dotenv.config({
  // path: '.env'
// });

// /**
 // * Express server application class.
 // * @description Will later contain the routing system.
 // */
// class Server {
  // public app = express();
// }

// // initialize server app
// const server = new Server();

// // make server listen on some port
// server.app.use('/api', server.router);
