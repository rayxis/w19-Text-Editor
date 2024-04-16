let deferredPrompt;
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
	// Prevent the default event from firing.
	event.preventDefault();
	// Store the prompt for a more convenient time, and then enable the button
	deferredPrompt      = event;
	butInstall.disabled = false;
});

butInstall.addEventListener('click', async () => {
	// Prompt the user to install, then disable the button
	deferredPrompt.prompt();
	butInstall.disabled    = true;
	// Set the button text
	butInstall.textContent = 'Installed';
	// Clear the prompt
	deferredPrompt         = null;
});

window.addEventListener('appinstalled', (event) => {
	//  Disable clicking on the button
	butInstall.disabled = true;
});
