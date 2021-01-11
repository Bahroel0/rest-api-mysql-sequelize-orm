const models = require("../models");
const User = models.User;

module.exports = {
  create: async (req, res) => {
    try {
      const { email, firstName, lastName, companyId } = { ...req.body };
      User.create({
        email,
        firstName,
        lastName,
        companyId,
      });
      return res.status(201).json(transaction.get());
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err,
      });
    }
  },
  list: async (req, res) => {},
  update: async (req, res) => {},
  delete: async (req, res) => {},
};
