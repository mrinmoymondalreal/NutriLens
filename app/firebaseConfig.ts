import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.EXPO_API_KEY,
    authDomain: process.env.EXPO_AUTH_DOMAIN,
    projectId: process.env.EXPO_PROJECT_ID,
    storageBucket: process.env.EXPO_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.EXPO_FIREBASE_APP_ID,
    measurementId: process.env.EXPO_FIREBASE_MEASUREMENT_ID
};

if (firebase.getApps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
