const transitionDelayMs = 650;

const soundPrompt = document.querySelector("#sound-prompt");
const alertAudio = document.querySelector("#alert-audio");
const wifiFrame = document.querySelector("#wifi-frame");
const inlineHackFrame = document.querySelector("#inline-hack-frame");
const wifiAccessButton = document.querySelector("#wifi-access-button");

let soundPlayed = false;

async function playAlertSound() {
  if (soundPlayed || !alertAudio) return;

  alertAudio.currentTime = 0;
  alertAudio.volume = 1;
  await alertAudio.play();

  soundPlayed = true;
  if (soundPrompt) {
    soundPrompt.hidden = true;
  }
}

function showSoundFallback() {
  if (!soundPlayed && soundPrompt) {
    soundPrompt.hidden = false;
  }
}

function showHackScreen() {
  if (!wifiFrame || !inlineHackFrame) return;

  wifiFrame.hidden = true;
  inlineHackFrame.hidden = false;
  document.body.classList.remove("portal-body");
  document.body.classList.add("hack-body");
  document.title = "Voce quase foi hackeado";
  window.scrollTo(0, 0);
}

wifiAccessButton?.addEventListener("click", (event) => {
  event.preventDefault();

  playAlertSound().catch(() => {
    // iOS should allow this because it runs directly from the tap.
  });

  window.setTimeout(showHackScreen, transitionDelayMs);
});

function tryAutoplayAlert() {
  if (wifiAccessButton) return;

  playAlertSound().catch(showSoundFallback);
  window.setTimeout(showSoundFallback, 700);
}

if (alertAudio && !wifiAccessButton) {
  document.addEventListener("DOMContentLoaded", tryAutoplayAlert);
  window.addEventListener("pageshow", tryAutoplayAlert);
  window.addEventListener("load", tryAutoplayAlert);
}

soundPrompt?.addEventListener("click", () => {
  playAlertSound().catch(showSoundFallback);
});
