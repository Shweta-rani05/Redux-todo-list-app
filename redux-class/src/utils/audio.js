// src/utils/audio.js

let doneSound;
let deleteSound;
let celebrateSound;

export const playDoneSound = () => {
  if (!doneSound) doneSound = new Audio("/done.mp3");
  doneSound.currentTime = 0;
  doneSound.play().catch(() => {});
};

export const playDeleteSound = () => {
  if (!deleteSound) deleteSound = new Audio("/delete.mp3");
  deleteSound.currentTime = 0;
  deleteSound.play().catch(() => {});
};

export const playCelebrateSound = () => {
  if (!celebrateSound) celebrateSound = new Audio("/celebrate.mp3");
  celebrateSound.currentTime = 0;
  celebrateSound.play().catch(() => {});
};


