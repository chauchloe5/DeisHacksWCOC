import express from 'express'; 
import { companies, nonProfits, nonProfitObject } from '../../db';

const router = express.Router();

// /api/company/:company-id
// get swipedRightOn list of specific company
router.get('/:companyId', (req, res, next) => {
  const id = req.params.companyId;
  res.setHeader('Content-Type', 'application/json');
  let company = companies.get(id);

  let swipedrightnonprofits: nonProfitObject[] = [];
  company?.swipedRightOn.forEach((id: string) => {
    swipedrightnonprofits.push(nonProfits.get(id) as nonProfitObject);
  });

  res.status(200).json({ 
    nonprofits: swipedrightnonprofits,
  });
});

export default router;