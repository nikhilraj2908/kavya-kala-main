const express = require("express");
const cors = require("cors");
const app = express();

const poetRoutes = require('./routes/poetRoutes');
const writingRoutes = require('./routes/writingRoutes');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // 👈 Add this for JSON body support

app.use('/api/poets', poetRoutes);
app.use('/api/writings', writingRoutes);

module.exports = app;
