import Workshop from "../models/workshopModel.js"

const store = async (req, res) => {
  try {
    const { name, address, specialties } = req.body;

    await Workshop.create({ name, address, specialties });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const index = async (req, res) => {
  try {
    const content = await Workshop.find().exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const content = await Workshop.findById(req.params.id)
      .populate("maintenances")
      .exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { name, address, specialties } = req.body;

    await Workshop.findByIdAndUpdate(req.params.id, {
      name,
      address,
      specialties,
    }).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    await Workshop.findByIdAndDelete(req.params.id).exec();

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
