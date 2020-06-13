function item_view(id, value) {
  var app = document.querySelector(id);
  document.querySelector(`#body_one`).style.display = "none";
  document.querySelector(`#body_two`).style.display = "none";
  document.querySelector(`#body_three`).style.display = "none";
  document.querySelector(`#body_four`).style.display = "none";

  if (app.style.display == value) {
    app.style.display = "none";
  } else {
    app.style.display = value;
  }
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function() {});
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(reg => {});
  });
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", e => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  showInstallPromotion();
});
btnAdd.addEventListener("click", e => {
  // hide our user interface that shows our A2HS button
  btnAdd.style.display = "none";
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the A2HS prompt");
    } else {
      console.log("User dismissed the A2HS prompt");
    }
    deferredPrompt = null;
  });
});
