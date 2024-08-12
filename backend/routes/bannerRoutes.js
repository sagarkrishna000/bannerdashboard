const express = require("express");
const { getBanner, updateBanner } = require("../models/Banner");

const router = express.Router();

router.get("/banner", (req, res) => {
  getBanner((data) => {
    res.json(data);
  });
});

router.post("/banner", (req, res) => {
  const { description, timer, link, visibility } = req.body;
  updateBanner({ description, timer, link, visibility }, (result) => {
    res.json({ success: true });
  });
});

module.exports = router;
