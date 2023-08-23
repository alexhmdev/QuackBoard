/**
 *
 * @param {Audio} sound
 */
export const playSound = (sound) => {
  if (sound instanceof Audio) {
    sound.play();
    sound.currentTime = 0;
  } else {
    throw new Error('sound is not an instance of Audio');
  }
};
