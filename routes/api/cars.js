const express = require('express');

const router = express.Router();

const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => next(err));
};

const getListCars = catchAsync(async (req, res, next) => {
  const result = await Car.find();

  res.json(result);
});

router.get('/', getListCars);

module.exports = router
