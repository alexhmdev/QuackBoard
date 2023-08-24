import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecordings = create(
  persist(
    (set, get) => ({
      recordings: [],
      setRecordings: (recording) =>
        set({ recordings: { ...get().recordings }, recording }),
      addRecording: (recording) =>
        set({ recordings: [...get().recordings, recording] }),
      removeRecording: (index) =>
        set({
          recordings: get().recordings.filter((_, i) => i !== index),
        }),
      clearRecordings: () => set({ recordings: [] }),
    }),
    {
      name: 'recordings',
    }
  )
);
