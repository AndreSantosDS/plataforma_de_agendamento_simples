const Appointment = require("../models/Appointment");

module.exports = class AppointmentController {
  static async createAppointment(req, res) {
    const { clientName, date, hour } = req.body;

    if (!date) {
      return res.status(400).json({ error: "Data é obrigatória" });
    }

    if (!hour) {
      return res.status(400).json({ error: "Hora é obrigatória" });
    }
    if (!clientName) {
      return res.status(400).json({ error: "Nome do cliente é obrigatório" });
    }

    const existingAppointment = await Appointment.findOne({ date, hour });
    if (existingAppointment) {
      return res
        .status(400)
        .json({ error: "Já existe um agendamento para esta data e hora" });
    }

    try {
      const newAppointment = new Appointment({ clientName, date, hour });
      await newAppointment.save();
      res.status(201).json({message: 'O agendamento foi um sucesso!', newAppointment});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAppointmentByDate(req, res) {
    try {
      const { data } = req.params;

      if (!data) {
        return res.status(400).json({ error: "Data é obrigatória" });
      }

      const appointmentExists = await Appointment.findOne({ date: data });

      if (!appointmentExists) {
        return res.status(404).json({ message: "Nenhum agendamento para esta data" });
      }

      const appointments = await Appointment.find({ date: data }).sort({
        hour: 1,
      });

      res.status(200).json(appointments);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};
