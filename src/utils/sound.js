export const sounds = {};

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
  /**
   * @type {HTMLAudioElement}
   * @description The sound to play.
   */
  const sound = sounds[key];
  if (sound) {
    // if the user is on safari Mac or any device, we need to change the current time of the sound
    // if (navigator.userAgent.indexOf('Safari') != -1) {
    //   // alert('Safari');
    //   sound.play();
    // } else {
    sound.play();
    sound.currentTime = 0.23;
    // }
  }
}
