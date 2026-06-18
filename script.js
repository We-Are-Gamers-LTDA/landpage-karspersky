const purchaseLinks = document.querySelectorAll(".purchase-link");
const soundPrompt = document.querySelector("#sound-prompt");
const alertAudio = document.querySelector("#alert-audio");

purchaseLinks.forEach((link) => {
  link.href = campaignConfig.ctaUrl;
});

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

function tryAutoplayAlert() {
  playAlertSound().catch(showSoundFallback);
  window.setTimeout(showSoundFallback, 700);
}

if (alertAudio) {
  document.addEventListener("DOMContentLoaded", tryAutoplayAlert);
  window.addEventListener("pageshow", tryAutoplayAlert);
  window.addEventListener("load", tryAutoplayAlert);
}

soundPrompt?.addEventListener("click", () => {
  playAlertSound().catch(showSoundFallback);
});

window.addEventListener(
  "pointerdown",
  () => {
    playAlertSound().catch(showSoundFallback);
  },
  { once: true }
);
