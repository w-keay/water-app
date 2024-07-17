// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const FIREBASEAPI = import.meta.env.VITE_APP_FIREBASEAPI;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: FIREBASEAPI,
  authDomain: "waterbreak-e5976.firebaseapp.com",
  projectId: "waterbreak-e5976",
  storageBucket: "waterbreak-e5976.appspot.com",
  messagingSenderId: "336790258781",
  appId: "1:336790258781:web:57f68cbb2af794d786f9b4",
  measurementId: "G-50VFVE7MBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    
    if(permission === "granted") {
        const token = await getToken(messaging, {
            vapidkey: API_KEY
        });
        
    }
    
}

