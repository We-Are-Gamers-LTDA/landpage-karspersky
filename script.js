const transitionDelayMs = 650;

const alertAudio = document.querySelector("#alert-audio");
const accessGate = document.querySelector("#access-gate");
const accessCheck = document.querySelector("#access-check");
const siteContent = document.querySelector("#site-content");

let soundPlayed = false;
let soundStartRequested = false;
let transitionStarted = false;

async function playAlertSound() {
  if (soundPlayed || soundStartRequested || !alertAudio) return;

  soundStartRequested = true;
  alertAudio.currentTime = 0;
  alertAudio.volume = 1;
  alertAudio.muted = false;

  try {
    await alertAudio.play();
    soundPlayed = true;
  } catch (error) {
    soundStartRequested = false;
    throw error;
  }
}

function showLandingPage() {
  if (!accessGate || !siteContent) return;

  accessGate.hidden = true;
  siteContent.hidden = false;
  document.title = "Você quase foi hackeado | Kaspersky";
  window.history.replaceState(null, "", "#alerta");
  window.scrollTo(0, 0);
}

accessCheck?.addEventListener("click", () => {
  if (transitionStarted) return;
  transitionStarted = true;

  accessCheck.classList.add("is-confirmed");
  accessCheck.setAttribute("aria-checked", "true");
  accessCheck.disabled = true;

  // A chamada precisa ocorrer diretamente no toque para ser aceita no iOS e Android.
  playAlertSound().catch(() => {
    // Se uma configuração do aparelho ainda bloquear o áudio, não impede a navegação.
  });

  window.setTimeout(showLandingPage, transitionDelayMs);
});
