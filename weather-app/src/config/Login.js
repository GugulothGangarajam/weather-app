import firebase from 'firebase/app';
import 'firebase/auth';
import {development as evironment} from './environment';
const config = {
        apiKey: evironment.apiKey,
        authDomain: evironment.authDomain,
        projectId: evironment.projectId,
        storageBucket: evironment.storageBucket,
        messagingSenderId: evironment.messagingSenderId,
        appId: evironment.appId
 };
 
firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;