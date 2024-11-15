const express = require("express");

const router = express.Router();

const Car = require("../../models/carModel");

const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => next(err));
};

const getListCars = catchAsync(async (req, res, next) => {
  const { page = 1, limit = 12 } = req.query;

  const result = await Car.paginate(
    {},
    { page: parseInt(page), limit: parseInt(limit) }
  );

  res.json(result);
});

router.get("/", getListCars);

module.exports = router;
