import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecordings = create(
  persist(
    (set, get) => ({
      recordings: [],
      addRecording: (recording) =>
        set({ recordings: [recording, ...get().recordings] }),
      removeRecording: (name) =>
        set({
          recordings: get().recordings.filter(
            (recording) => recording.name !== name
          ),
        }),
      clearRecordings: () => set({ recordings: [] }),
    }),
    {
      name: 'recordings',
    }
  )
);
