import express from 'express'; 
import { nonProfits } from '../../db';
import { companies } from '../../db';

const router = express.Router();

// GET all non-profits
router.get('/', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ 
    nonProfit: nonProfits
  });
});

// Add profit-id to swipe-right list of company 
// and add company-id to swipe-right list of non-profit
router.post('/', (req: any, res, next) => {
  const cId = req.body.companyId;
  const nID = req.body.nonProfitId;
  let company = companies.get(cId);
  let np = nonProfits.get(nID);
  company?.swipedRightOn.push(nID);
  np?.whoSwipedRight.push(cId);
 
  res.status(201);

  // res.status(201).json({

  // })  
});

router.put('/', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on ');
});

export default router;