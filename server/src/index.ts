//import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { todoRouter } from './routes/todo';
import bodyparser from 'body-parser';


(async () => {
  const app = express()
  app.get('/', (req, res) => {
    res.send('Hello from express and typescript');
});

  const PORT = 5000;

  //const add = (a: number, b: number): number => a+b;

  app.use(json())
  app.use(todoRouter)

  mongoose.connect('mongodb://localhost:27017/todo')
  .then((db) => {
    console.log('Connected to database');
  }, (err) => { console.log(err)})

  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
  })

  // REST API endpoints
  app.post("/personnel", (req, res) => {

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
