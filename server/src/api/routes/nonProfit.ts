import express from 'express'; 

const router = express.Router();

// GET all non-profits
router.get('/', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ 
    message: 'Got nonProfit get' ,
  });
});

// Add profit-id to swipe-right list of company 
// and add company-id to swipe-right list of non-profit
router.post('/', (req: any, res, next) => {
  // add profit-id to company.swipe-right
  // non-profit.swipe-right(company-id);
  res.status(201).json({
    id: req.body.id,
    message: 'Non-profit was created ' + req.body.id,
  })  
});

router.put('/', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on ');
});

export default router;