const express = require("express");
const router = express.Router();
const {
  getAppointments,
  addAppointments,
  getCurrentAppointment,
  cancelAppointment,
  getUserAppointments,
  getActiveAppointmentsByDepartmentId,
} = require("../controllers/appointmentsController");

router.get("/", getAppointments);
router.get("/current/:patientId", getCurrentAppointment);
router.get("/patient/:patientId", getUserAppointments);
router.get("/active/department/:departmentId", getActiveAppointmentsByDepartmentId);
router.post("/", addAppointments);
router.patch("/:id/cancel", cancelAppointment);

module.exports = router;
