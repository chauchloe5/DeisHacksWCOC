//import dotenv from 'dotenv';
import bodyparser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';

import nonProfitRouter from './api/routes/nonProfit';
import companyRouter from './api/routes/company';
import forumRouter from './api/routes/forum';


(async () => {
  const app = express()
  const PORT = 5000;

  app.use(json())
  app.use('/api/nonProfit', nonProfitRouter);
  app.use('/api/company', companyRouter);
  app.use('/api/forum', forumRouter);

  // mongoose.connect('mongodb://localhost:27017/todo')
  // .then((db) => {
  //   console.log('Connected to database');
  // }, (err) => { console.log(err)})

  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
  })
})();