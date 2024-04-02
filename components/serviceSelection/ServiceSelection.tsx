"use client";

import React, { useState } from "react";
import style from "./serviceSelection.module.css";
import useAppStore from "../zustand/zustand";

interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
}

interface ServiceSelectionProps {
  services: Service[];
}

const ServiceSelection: React.FC<ServiceSelectionProps> = ({ services }) => {
  // Creamos un objeto para agrupar los servicios por categoría
  const categorizedServices: { [category: string]: Service[] } = {};

  // Agrupamos los servicios por categoría
  services.forEach((service) => {
    if (!categorizedServices[service.category]) {
      categorizedServices[service.category] = [];
    }
    categorizedServices[service.category].push(service);
  });

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleCategoryToggle = (category: string) => {
    setExpandedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const handleServiceSelection = (serviceId: number) => {
    useAppStore.setState({ selectedServiceId: serviceId });
  };

  return (
    <div className={style.container}>
      <h2>Categorias:</h2>
      {Object.entries(categorizedServices).map(
        ([category, categoryServices]) => (
          <div key={category} className={style.category}>
            <h3
              onClick={() => handleCategoryToggle(category)}
              className={style.categoryHeader}
            >
              {category}{" "}
              <span>{expandedCategory === category ? "-" : "+"}</span>
            </h3>
            {expandedCategory === category && (
              <div className={style.categoryServices}>
                {categoryServices.map((service) => (
                  <div key={service.id}>
                    <p> {service.name}</p>
                    <p> {service.description}</p>
                    <button
                      className={style.button}
                      onClick={() => handleServiceSelection(service.id)}
                    >
                      Seleccionar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default ServiceSelection;
