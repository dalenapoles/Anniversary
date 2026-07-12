// This file runs inside the master player.html layout frame
const pauseOrPlay = document.querySelectorAll(".pauseOrPlay");

// Function to handle global track play/pause triggers
function toggleTrack(trackIndex) {
  let targetContainer = pauseOrPlay[trackIndex];
  if (!targetContainer) return;

  let audio = targetContainer.querySelector("audio");

  if (audio.paused) {
    // 1. Silence all other background tracks first
    pauseOrPlay.forEach(otherContainer => {
      let otherAudio = otherContainer.querySelector("audio");
      if (otherAudio !== audio && !otherAudio.paused) {
        otherAudio.pause();
        otherAudio.currentTime = 0;
      }
    });

    // 2. Play the clicked audio file
    audio.play();
    return "playing";
  } else {
    // 3. Pause if it's already playing
    audio.pause();
    return "paused";
  }
}

// Function to update the play/pause button graphics INSIDE the iframe content window
function syncIframeButtons(iframeWindow) {
  let iframeContainers = iframeWindow.document.querySelectorAll(".pauseOrPlay");
  
  iframeContainers.forEach((btn, index) => {
    let backgroundAudio = pauseOrPlay[index].querySelector("audio");
    let playIcon = btn.querySelector(".play");
    let pauseIcon = btn.querySelector(".pause");

    if (backgroundAudio && playIcon && pauseIcon) {
      if (!backgroundAudio.paused) {
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
      } else {
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
      }
    }

    // Attach click events to the iframe buttons to talk to the master background player
    if (!btn.hasAttribute("data-listener-attached")) {
      btn.setAttribute("data-listener-attached", "true");
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        let state = toggleTrack(index);
        
        // Re-sync all buttons instantly across the current screen view
        syncIframeButtons(iframeWindow);
      });
    }
  });
}

// Listen to the iframe navigation change actions
const iframe = document.querySelector(".content-frame");
iframe.addEventListener("load", () => {
  const iframeWindow = iframe.contentWindow;

  // 1. Sync button states and assign actions if the current page has music cards
  syncIframeButtons(iframeWindow);

  // 2. Intercept the navigation menus inside the iframe to stop them from redirecting the master browser tab
  const icon1 = iframeWindow.document.getElementById("icon1");
  const icon2 = iframeWindow.document.getElementById("icon2");
  const icon3 = iframeWindow.document.getElementById("icon3");

  if (icon1) {
    icon1.addEventListener("click", (e) => {
      e.preventDefault();
      iframeWindow.location.replace("message.html");
    });
  }
  if (icon2) {
    icon2.addEventListener("click", (e) => {
      e.preventDefault();
      iframeWindow.location.replace("music.html");
    });
  }
  if (icon3) {
    icon3.addEventListener("click", (e) => {
      e.preventDefault();
      iframeWindow.location.replace("flower.html");
    });
  }
});
