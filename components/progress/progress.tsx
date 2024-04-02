import useAppStore from "../zustand/zustand";

const ProgressBar = () => {
  const selectedServiceId = useAppStore((state) => state.selectedServiceId);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: selectedServiceId ? "50%" : "0%" }} // Set width based on selectedServiceId
      ></div>
    </div>
  );
};

export default ProgressBar;
