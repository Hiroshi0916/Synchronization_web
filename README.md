# Synchronization_web

This project demonstrates a web app that synchronizes the mouse movement across multiple browsers.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

1. Node.js installation: Develop and run Firebase Cloud Functions using Node.js, a runtime that enables server-side execution of JavaScript.

2. Firebase CLI installation: Use the Firebase CLI to create, manage, and deploy Firebase projects.

3. Firebase project creation: Create a new Firebase project in the Firebase console and enable the required features.

With these prerequisites in place, you can proceed with developing using Firebase Cloud Functions.

## Node.js Environment Setup

Follow the instructions provided for installing Node.js on Windows, macOS, or Linux (Debian and Ubuntu-based distributions).

After installing Node.js, verify the installation by running `node -v` and `npm -v` in the terminal (or Command Prompt on Windows).

## Firebase Environment Setup

1. Create a Firebase project in the Firebase console.

2. Install the Firebase CLI by running `npm install -g firebase-tools`.

3. Log in to the Firebase CLI by running `firebase login`.

4. Initialize the Firebase project in the project directory by running `firebase init`. Follow the prompts to select Realtime Database and Hosting.

5. Configure the Firebase project settings in main.js by adding the Firebase project settings to `const firebaseConfig`.

6. Install the necessary packages by running `npm install firebase-admin firebase-functions`.

## Firebase Security Settings

Change the security settings in the Realtime Database rules to:

{
"rules": {
".read": true,
".write": true
}
}


Change the Firebase pricing plan to the Blaze pay-as-you-go plan.

## Building the Project

1. Log in to the Firebase project by running `firebase login` in the project directory (if not already logged in).

2. Initialize the Firebase project by running `firebase init` (if not already initialized). Follow the prompts to select Hosting and set the default public folder.

3. Ensure the `public` folder contains `index.html` and `main.js`.

## Testing the Project

*Note: This project does not have automated tests. The following steps demonstrate how to manually test the project.*

1. Open two browser windows and navigate to the same URL.

2. Move the mouse in one browser window. The dot in the other browser window should move to the same coordinates.

3. The browser's developer tools console should display the mouse coordinates.

## Deployment

Deploy the Firebase project by running `firebase deploy`. This will deploy the files in the `public` folder to Firebase Hosting, making the web app publicly accessible. Once the deployment is complete, the terminal will display the URL of the web app.


