const { Schema, model } = require("mongoose");

const carSchema = new Schema({
   year: {
      type: Number,
    },
    make: {
      type: String,
    },
    model: {
      type: String,
    },
    type: {
      type: String,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
    },
    fuelConsumption: {
      type: String,
    },
    engineSize: {
      type: String,
    },
    accessories: {
      type: Array,
    },
    functionalities: {
      type: Array,
    },
    rentalPrice: {
      type: Number,
    },
    engineSize: {
      type: String,
    },
    address: {
      type: String,
    },
    rentalConditions: {
      type: Array,
    },
    mileage: {
      type: String,
    },
    id: {
      type: String,
    },
},
{
    timestamps: true,
    versionKey: false,
  }
)

const Car = model('Cars', carSchema);

module.exports = Car;