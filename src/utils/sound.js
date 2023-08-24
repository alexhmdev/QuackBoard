const sounds = {};

/**
 * Load a sound into the library.
 *
 * @param {string} key - The unique identifier for the sound.
 * @param {string} source - The source URL of the audio file.
 * @returns {void}
 */
export function loadSound(key, source) {
  sounds[key] = new Audio(source);
}

/**
 * Play a loaded sound from the library.
 *
 * @param {string} key - The unique identifier of the sound to play.
 * @returns {void}
 */
export function playSound(key) {
  const sound = sounds[key];
  if (sound) {
    sound.currentTime = 0.25;
    sound.play();
  }
}
