import { create } from "zustand";

interface AppState {
  selectedServiceId: number | null; // Initial value as null
  selectedHorario: string | null;
}

const useAppStore = create<AppState>((set) => ({
  selectedServiceId: null,
  selectedHorario: null,
}));

export default useAppStore;
