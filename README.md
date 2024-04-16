# Just Another Text Editor

## Description

Just Another Text Editor (JATE) is a Progressive Web Application (PWA) offering an intuitive text editing experience
utilizing your web browser. JATE is built on Node.js using webpack to keep it together in a clean package that will work
on any device, making it highly accessible and portable.

## Usage

To use JATE, navigate to the deployed URL on your web browser. All texts are automatically saved to your browser's local
storage so you won't lose your work if you accidentally clost the application.

To use JATE in offline mode, you'll need to visit the site at least once while you're online. This will allow your 
browser to download and cache the necessary resources. After this initial visit, you'll be able to use JATE offline.

## Installation

Being a PWA, JATE can be installed on your device and can be used like a traditional app. Follow these steps to install
the app:

For Desktop:

1. Navigate to the deployed site on Google Chrome.
2. Click on the three dot menu in the top right corner.
3. Click 'Install JATE'.

For Mobile:

1. Navigate to the deployed site on Google Chrome.
2. Click on the three dot menu in the top right corner.
3. Scroll and click 'Add to Home Screen'.

## User Story

```text
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

# Acceptance Criteria

```text
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```