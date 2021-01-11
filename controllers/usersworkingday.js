const models = require("../models");
const UsersWorkingDay = models.UsersWorkingDay;

module.exports = {
  create: async (req, res) => {
    try {
      const { name } = { ...req.body };
      const transaction = await UsersWorkingDay.create({
        userId,
        workingDayId,
      });
      return res.status(201).json(transaction.get());
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err,
      });
    }
  },
};
