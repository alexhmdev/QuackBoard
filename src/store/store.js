import { create } from 'zustand';
import { playSound } from '../utils';

export const useStore = create((set) => ({
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  keyPlayed: null,
  setKeyPlayed: (keyPlayed) => set({ keyPlayed }),
  showControls: true,
  setShowControls: (showControls) => set({ showControls }),
  showChords: false,
  setShowChords: (showChords) => set({ showChords }),
  volume: 0.5,
  setVolume: (volume) => set({ volume }),
  isRecording: false,
  isRecordingPlaying: false,
  setIsRecording: (isRecording) => set({ isRecording }),
  keysPressed: [],
  recordKeysPressed: (key) =>
    set((state) => ({
      keysPressed: [...state.keysPressed, { key, timeStamp: Date.now() }],
    })),
  clearKeysPressed: () => set({ keysPressed: [] }),
  playRecordedKeys: (keysPressed) => {
    set({ isRecordingPlaying: true });

    keysPressed.forEach(({ key, timeStamp }) => {
      setTimeout(() => {
        playSound(key);
        set({ keyPlayed: key });
        setTimeout(() => {
          set({ keyPlayed: null });
        }, 100);
      }, timeStamp - keysPressed[0].timeStamp);
    });

    setTimeout(() => {
      set({ isRecordingPlaying: false });
      set({ keyPlayed: null });
    }, keysPressed[keysPressed.length - 1].timeStamp - keysPressed[0].timeStamp + 100);
  },
}));
