// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJzXVHzst-VKxxh1375W0NIpn9CPj7Jnk",
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
    console.log(permission);
    if(permission === "granted") {
        const token = await getToken(messaging, {
            vapidkey: "BLdYkNs50ZamjLZS6m9qFSVrebm0O4K7owfphGD3E_8F6g5mJg-kbYnlYaJ8mK3qe2P1cWlEVRyfDd2jPROdnTU"
        });
        console.log(token)
    }
    
}

