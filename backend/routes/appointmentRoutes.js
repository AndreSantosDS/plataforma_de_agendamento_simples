const router = require("express").Router();
const AppointmentController = require("../controllers/AppointmentController");

// criar agendamento
router.post("/", AppointmentController.createAppointment);

// buscar agenda por data
router.get("/:data", AppointmentController.getAppointmentByDate);

module.exports = router;