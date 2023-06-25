const butInstall = document.getElementById('buttonInstall');
let deferredPrompt; // Declare the variable outside the event handler

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event; // Assign the event to the variable
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    deferredPrompt = null;
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted PWA installation.');
    } else {
      console.log('User declined the PWA installation.');
    }
  });
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA installed successfully.')
});
