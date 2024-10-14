import Maintenance from "../models/maintenanceModel.js";
import Vehicle from "../models/vehicleModel.js";
import Workshop from "../models/workshopModel.js";

const store = async (req, res) => {
  try {
    const { workshop, vehicle, services, date } = req.body;

    let totalCost = services.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );

    const maintenance = await Maintenance.create({
      workshop,
      vehicle,
      services,
      date,
      totalCost,
    });

    const wrk = await Workshop.findById(workshop).exec();
    wrk.maintenances.push(maintenance._id);
    wrk.save();

    const vhl = await Vehicle.findById(vehicle).exec();
    vhl.maintenances.push(maintenance._id);
    vhl.save();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const index = async (req, res) => {
  try {
    const content = await Maintenance.find().exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const content = await Maintenance.findById(req.params.id)
      .populate(["vehicle", "workshop"])
      .exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { services, date } = req.body;

    let totalCost = services.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );

    await Maintenance.findByIdAndUpdate(req.params.id, {
      services,
      date,
      totalCost,
    }).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    await Maintenance.findByIdAndDelete(req.params.id).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  store,
  index,
  show,
  update,
  destroy,
};
