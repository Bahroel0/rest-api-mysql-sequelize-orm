const models = require("../models");
const Company = models.Company;

module.exports = {
  list: async (req, res) => {
    const result = await Company.findAll();
    return res.json(result);
  },
  create: async (req, res) => {
    try {
      const { name } = { ...req.body };
      const transaction = await Company.create({
        name,
      });
      return res.status(201).json(transaction.get());
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err,
      });
    }
  },
  update: async (req, res) => {
    try {
      const { name } = { ...req.body };
      const { id } = { ...req.params };
      const company = await Company.findOne({
        where: {
          id,
        },
      });
      company.name = name;
      company.save();
      return res.status(200).json(company.get());
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err,
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = { ...req.params };
      const company = await Company.findOne({
        where: {
          id,
        },
      });
      company.destroy();
      return res.status(200).json(company.get());
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err,
      });
    }
  },
};
