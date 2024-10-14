import Vehicle from "../models/vehicleModel.js";

const store = async (req, res) => {
  try {
    const { plate, year, model, owner } = req.body;

    await Vehicle.create({ plate, year, model, owner });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const index = async (req, res) => {
  try {
    const content = await Vehicle.find().exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const content = await Vehicle.findById(req.params.id)
      .populate("maintenances")
      .exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { plate, year, model, owner } = req.body;

    await Vehicle.findByIdAndUpdate(req.params.id, {
      plate,
      year,
      model,
      owner,
    }).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    await Vehicle.findByIdAndDelete(req.params.id).exec();

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
