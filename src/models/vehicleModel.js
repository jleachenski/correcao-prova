import { Schema, model } from "mongoose";

const vehicleSchema = new Schema({
  model: {
    type: String,
    required: true,
  },
  plate: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  maintenances: {
    type: [Schema.ObjectId],
    ref: "Maintenance",
  },
});

const Vehicle = model("Vehicle", vehicleSchema);

export default Vehicle;
