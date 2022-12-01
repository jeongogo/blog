import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set) => ({
  member: {
    email: '',
    name: ''
  },
  setMember: (data) => set(() => ({ member: data })),
});

store = persist(store, { name: 'blogAppAuth', getStorage: () => localStorage });

const useStore = create(devtools(store));

export default useStore;