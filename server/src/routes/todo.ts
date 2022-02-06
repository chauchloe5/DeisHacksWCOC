import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import { Todo } from '../models/todo'

const router = express.Router()

router.get('/api/todo', [], (req : Request, res: Response) => {
  return res.send('Hello from todo')
})

router.post('/api/todo', (req, res) => {
  const {title, description } = req.body;
  
  const todo = Todo.build({ title, description })
  await Todo.save()
  return res.status(201).send('todo')
})

interface TodoDoc extends mongoose.Document {
  title: string;
  description: string;
}

export { router as todoRouter }

// class RouterA {
//   private _router = Router();
//   private _controller = ThemeAController;

//   get router() {
//     return this._router;
//   }

//   constructor() {
//     this._configure();
//   }

//   /**
//    * Connect routes to their matching controller endpoints.
//    */
//   private _configure() {
//     this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
//       res.status(200).json(this._controller.defaultMethod());
//     });
//   }
// }
