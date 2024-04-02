"use client";

import React, { useState } from "react";
import useAppStore from "../zustand/zustand";

interface Horario {
  date: string;
  serviceId: number;
  availableTimeslots: string[];
}

interface HorariosDisponiblesProps {
  horariosDisponibles: Horario;
}

const HorariosDisponibles: React.FC<HorariosDisponiblesProps> = ({
  horariosDisponibles,
}) => {
  const [selectedHorario, setSelectedHorario] = useState<string | null>(null);

  const handleHorarioSelect = (availableTimeslot: string) => {
    setSelectedHorario(availableTimeslot);
  };

  const selectedServiceId = useAppStore((state) => state.selectedServiceId);

  return (
    <div>
      <h2>Horarios Disponibles ({horariosDisponibles.date})</h2>

      {horariosDisponibles.availableTimeslots.map((availableTimeslot) => (
        <section key={availableTimeslot}>
          <input
            type="radio" // Use radio buttons for single selection
            id={availableTimeslot} // Unique ID for each radio button
            name="availableTimeslot" // Same name for all radio buttons
            value={availableTimeslot}
            checked={selectedHorario === availableTimeslot} // Check if current slot is selected
            onChange={() => handleHorarioSelect(availableTimeslot)}
          />
          <label htmlFor={availableTimeslot}>{availableTimeslot}</label>
        </section>
      ))}

      {selectedHorario && (
        <button disabled={!selectedHorario}>
          Seleccionar {selectedHorario}
        </button>
      )}
    </div>
  );
};

export default HorariosDisponibles;
