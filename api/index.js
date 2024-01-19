import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`${req.query.name || "Santhosh"}`);
});

export default router;
