require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { connectDB } = require("./config/db");
const usersRoutes = require("./routes/usersRoutes");
const departmentsRoutes = require("./routes/departmentsRoutes");
const appointmentsRoutes = require("./routes/appointmentsRoutes");
const reportPrescriptionRoutes = require("./routes/reportPrescriptionRoutes");
const attachDB = require("./middleware/attachDB");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(attachDB);

app.get("/", (req, res) => {
  res.send("Health Portal API Running");
});

async function startServer() {
  await connectDB();

  app.use("/users", usersRoutes);
  app.use("/departments", departmentsRoutes);
  app.use("/appointments", appointmentsRoutes);
  app.use("/reports", reportPrescriptionRoutes);
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
