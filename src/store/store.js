import { create } from 'zustand';

export const useStore = create((set) => ({
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  showControls: true,
  setShowControls: (showControls) => set({ showControls }),
  showChords: false,
  setShowChords: (showChords) => set({ showChords }),
  volume: 0.5,
  setVolume: (volume) => set({ volume }),
}));
