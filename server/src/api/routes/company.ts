import express from 'express'; 

const router = express.Router();

// /api/company/:company-id
// get swipe-right list of specific company
router.get('/:companyId', (req, res, next) => {
  const id = req.params.companyId;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ 
    id: id,
    message: 'Got company get' 
  });
});

export default router;