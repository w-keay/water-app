
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');



const FIREBASEAPI = import.meta.env.VITE_APP_FIREBASEAPI;
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: FIREBASEAPI,
    authDomain: "waterbreak-e5976.firebaseapp.com",
    projectId: "waterbreak-e5976",
    storageBucket: "waterbreak-e5976.appspot.com",
    messagingSenderId: "336790258781",
    appId: "1:336790258781:web:57f68cbb2af794d786f9b4",
    measurementId: "G-50VFVE7MBD"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });