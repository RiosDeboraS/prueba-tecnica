"use client";

import styles from "./page.module.css";
import ServiceSelection from "@/components/serviceSelection/ServiceSelection";
import servicesData from "@/API/services";
import HorariosDisponibles from "@/components/scheduleSelection/ScheduleSelection";
import horarios from "@/API/slots";
import ProgressBar from "@/components/progress/progress";
import useAppStore from "@/components/zustand/zustand";
import { useState } from "react";

const Home = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const selectedServiceId = useAppStore((state) => state.selectedServiceId);

  const handleNextClick = () => {
    setShowSchedule(true);
  };

  const handleBackClick = () => {
    setShowSchedule(false);
    setShowBackButton(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <ProgressBar />
      <ServiceSelection services={servicesData} />
      {selectedServiceId && (
        <div className={styles.buttonContainer}>
          {showBackButton && (
            <button className={styles.backButton} onClick={handleBackClick}>
              Volver
            </button>
          )}
          <button className={styles.nextButton} onClick={handleNextClick}>
            Siguiente
          </button>
        </div>
      )}
      {showSchedule && (
        <div>
          <button className={styles.backButton} onClick={handleBackClick}>
            Volver
          </button>
          <HorariosDisponibles horariosDisponibles={horarios} />
        </div>
      )}
    </main>
  );
};

export default Home;
