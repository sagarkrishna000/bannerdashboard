const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createBannerTable } = require("./models/Banner");
const bannerRoutes = require("./routes/bannerRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", bannerRoutes);

createBannerTable();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
