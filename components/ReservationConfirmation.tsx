interface ReservationProps {
  selectedService: string;
  selectedTime: string;
}

const ReservationConfirmation: React.FC<ReservationProps> = ({
  selectedService,
  selectedTime,
}) => {
  // Aquí puedes mostrar un resumen de la reserva con los datos seleccionados
  return (
    <div>
      <h2>Resumen de la reserva:</h2>
      <p>Servicio: {selectedService}</p>
      <p>Horario: {selectedTime}</p>
      {/* Aquí también puedes incluir botones para confirmar o volver atrás */}
    </div>
  );
};

export default ReservationConfirmation;
