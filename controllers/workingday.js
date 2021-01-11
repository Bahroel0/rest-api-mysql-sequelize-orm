const models = require("../models");
const WorkingDay = models.WorkingDay;

module.exports = {
  create: async (req, res) => {
    try {
      const { weekDay, workingDate, isWorking } = { ...req.body };
      const transaction = await WorkingDay.create({
        weekDay,
        workingDate,
        isWorking,
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
