const mongoose = require("mongoose");
const { Schema } = mongoose;

const Appointment = new mongoose.model("Appointment",
  new Schema({
    clientName: {
      type: String,
      required: true
    },

    date: {
      type: String, // formato: YYYY-MM-DD
      required: true
    },

    hour: {
      type: String, // 09:00, 10:00, 20:00
      required: true
    }
  }, { timestamps: true }
)
);

module.exports = Appointment;
