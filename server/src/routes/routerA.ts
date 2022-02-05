import express from 'express'
// import ThemeAController from '../../controllers/ThemeAController';

const router = express.Router()

router.get('/api/todo', (req, res) => {
  return res.send('the todo')
})

router.post('/api/todo', (req, res) => {
  return res.send('new todo created')
})

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
