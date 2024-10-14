import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const maintenanceSchema = new Schema({
  vehicle: {
    type: Schema.ObjectId,
    ref: "Vehicle",
  },
  workshop: {
    type: Schema.ObjectId,
    ref: "Workshop",
  },
  services: {
    type: [serviceSchema],
    required: true,
  },
  date: {
    type: Schema.Types.Date,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
  },
});

const Maintenance = model("Maintenance", maintenanceSchema);

export default Maintenance;
