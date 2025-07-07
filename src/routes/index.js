import express from 'express';

const router = express.Router();

// @route   GET /api
// @desc    Welcome route
// @access  Public
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Zenauta API!' });
});

export default router;
