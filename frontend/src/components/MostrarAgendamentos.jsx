import React, { useState, useEffect } from "react";
import styles from "./MostrarAgendamentos.module.css";
import api from "../utils/api";

const HOURS = {
  manha: ["08:00", "09:00", "10:00", "11:00", "12:00"],
  tarde: ["14:00", "15:00", "16:00", "17:00"],
  noite: ["19:00", "20:00", "21:00"],
};

function MostrarAgendamentos() {
  const [date, setDate] = useState("");
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    if (!date) return;

    api.get(`/appointments/${date}`).then((response) => {
      setAgendamentos(response.data);
    });
  }, [date]);

  const renderAppointments = (hour) => {
    const filtered = agendamentos.filter((a) => hour.includes(a.hour));

    if (filtered.length === 0) {
      return (
        <span className={styles.empty}>Nenhum agendamento cadastrado</span>
      );
    }

    return filtered.map((item) => (
      <div key={item.id} className={styles.appointment}>
        <span className={styles.appointmentHour}>{item.hour}</span>
        <span className={styles.appointmentName}>{item.clientName}</span>
      </div>
    ));
  };

  return (
    <div className={styles.agendaContainer}>
      <div className={styles.agendaHeader}>
        <div className={styles.agendaTitle}>
          <h2>Sua agenda</h2>
          <p>Consulte os seus cortes de cabelo agendados por dia</p>
        </div>

        <div className={styles.agendaDate}>
          <input
            type="date"
            className={styles.dateInput}
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      {/* Manhã */}
      <div className={styles.agendaPeriod}>
        <div className={styles.periodHeader}>
          <span className={styles.periodIcon}>☀️</span>
          <span className={styles.periodTitle}>Manhã</span>
          <span className={styles.periodTime}>09h-12h</span>
        </div>

        <div className={styles.appointments}>
          {renderAppointments(HOURS.manha)}
        </div>
      </div>

      {/* Tarde */}
      <div className={styles.agendaPeriod}>
        <div className={styles.periodHeader}>
          <span className={styles.periodIcon}>🌤️</span>
          <span className={styles.periodTitle}>Tarde</span>
          <span className={styles.periodTime}>13h-18h</span>
        </div>

        <div className={styles.appointments}>
          <div className={styles.appointments}>
            {renderAppointments(HOURS.tarde)}
          </div>
        </div>
      </div>

      {/* Noite */}
      <div className={styles.agendaPeriod}>
        <div className={styles.periodHeader}>
          <span className={styles.periodIcon}>🌙</span>
          <span className={styles.periodTitle}>Noite</span>
          <span className={styles.periodTime}>19h-21h</span>
        </div>

        <div className={styles.appointments}>
          {renderAppointments(HOURS.noite)}
        </div>
      </div>
    </div>
  );
}

export default MostrarAgendamentos;
