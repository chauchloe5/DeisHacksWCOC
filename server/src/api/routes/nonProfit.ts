import express from 'express'; 
import { nonProfits } from '../../db';
import { companies } from '../../db';

const router = express.Router();

// GET all non-profits
router.get('/', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ 
    nonProfits: nonProfits
  });
});

// Add profit-id to swipe-right list of company 
// and add company-id to swipe-right list of non-profit
router.post('/', (req: any, res, next) => {
  // add profit-id to company.swipe-right
  // non-profit.swipe-right(company-id);
  const cId = req.body.companyId,
  const nID = req.body.nonProfitId,
  
  res.status(201).json({



    const company = companies: nonProfits,

    nonProfits: nonProfits, 

  })  
});

router.put('/', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on ');
});

export default router;