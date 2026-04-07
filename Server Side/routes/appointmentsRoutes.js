const express = require("express");
const router = express.Router();
const { getAppointments, addAppointments, getCurrentAppointment, cancelAppointment } = require("../controllers/appointmentsController");

router.get("/", getAppointments);
router.get("/current/:patientId", getCurrentAppointment);
router.post("/", addAppointments);
router.patch("/:id/cancel", cancelAppointment);

module.exports = router;