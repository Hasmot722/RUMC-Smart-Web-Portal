const express = require("express");
const router = express.Router();
const {
  getAppointments,
  addAppointments,
  getCurrentAppointment,
  cancelAppointment,
  getUserAppointments,
  getActiveAppointmentsByDepartmentId,
  updateAppointment,
  getAbsentAppointments,
  getVirtualRequestsByDepartment,
} = require("../controllers/appointmentsController");

router.get("/", getAppointments);
router.get("/current/:patientId", getCurrentAppointment);
router.get("/patient/:patientId", getUserAppointments);
router.get("/active/department/:departmentId", getActiveAppointmentsByDepartmentId);
router.get("/absent/department/:departmentId", getAbsentAppointments);
router.get("/virtual-prescription/department/:departmentId", getVirtualRequestsByDepartment);

router.post("/", addAppointments);

router.patch("/:id/cancel", cancelAppointment);
router.patch("/update/:id", updateAppointment);

module.exports = router;
