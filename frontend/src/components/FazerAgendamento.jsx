import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import styles from "./FazerAgendamento.module.css";
import api from "../utils/api";

const HOURS = {
  manha: ["08:00", "09:00", "10:00", "11:00", "12:00"],
  tarde: ["14:00", "15:00", "16:00", "17:00"],
  noite: ["19:00", "20:00", "21:00"],
};

function FazerAgendamento() {
  const [selectedHour, setSelectedHour] = useState(null);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    if (!date) return;

    api.get(`/appointments/${date}`).then((response) => {
      setAgendamentos(response.data);
    });
  }, [date]);
  const occupiedHours = agendamentos.map((a) => a.hour);

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
    toast.success(`Horário ${hour} selecionado!`);
  };

  const renderHours = (hours) =>
    hours.map((hour) => (
      <button
        key={hour}
        type="button"
        className={`${styles.hour_input} ${
          selectedHour === hour ? styles.selected : ""
        }
        ${occupiedHours.includes(hour) ? styles.disabled : ""}
`}
        onClick={() => handleHourClick(hour)}
      >
        {hour}
      </button>
    ));

  async function handleSubmit(e) {
    e.preventDefault();

    if (!date || !selectedHour) {
      toast.error("Selecione data e horário");
      return;
    }

    if (!name.trim()) {
      toast.error("Informe o nome do cliente");
      return;
    }

    const dadosObjeto = {
      clientName: name,
      date,
      hour: selectedHour,
    };

    try {
      const response = await api.post("/appointments", dadosObjeto);

      toast.success("Agendamento criado com sucesso!");

      // reset
      setDate("");
      setSelectedHour(null);
      setName("");
    } catch (error) {
      const message =
        error.response?.data?.error || "Erro ao criar agendamento";
      toast.error(message);
    }
  }
  return (
    <form className={styles.form_area} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h1>Agende um atendimento</h1>
        <p>
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </p>
      </div>

      <h3>Data</h3>
      <input
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={styles.date}
      />

      <h3>Horários</h3>
      <h4>Manhã</h4>
      <div className={styles.hours_group}>{renderHours(HOURS.manha)}</div>

      <h4>Tarde</h4>
      <div className={styles.hours_group}>{renderHours(HOURS.tarde)}</div>

      <h4>Noite</h4>
      <div className={styles.hours_group}>{renderHours(HOURS.noite)}</div>

      <div>
        <h4>Cliente</h4>
        <input
          type="text"
          name="clientName"
          className={styles.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <input
        type="submit"
        value="Agendar"
        className={styles.btn_agendar}
        disabled={!date || !selectedHour || !name}
      />
    </form>
  );
}

export default FazerAgendamento;
