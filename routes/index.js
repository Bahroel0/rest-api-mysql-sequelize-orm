const express = require("express");
const company = require("./modules/company");
const user = require("./modules/user");

const router = express.Router();
router.get("/", (req, res) => {
  return res.json({ message: "ok" });
});
router.use("/company", company);
router.use("/user", user);

module.exports = router;
