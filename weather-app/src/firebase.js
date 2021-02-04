import firebase from "firebase";
const firebaseConfig = {
        apiKey: "AIzaSyB06gQ91HD1aFVFU0qgds3e-V-e-eXZABg",
        authDomain: "weather-app-8b8a4.firebaseapp.com",
        projectId: "weather-app-8b8a4",
        storageBucket: "weather-app-8b8a4.appspot.com",
        messagingSenderId: "677692612604",
        appId: "1:677692612604:web:1b8d1dfa0982e436019c79"
};
/*initalising the app */
const firebaseApp=firebase.initializeApp(firebaseConfig);
/* access to database*/
const db=firebaseApp.firestore();
/*authentication login or signin */
const auth=firebase.auth();
/*provider-- tells the firebase we want the google login services */
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;