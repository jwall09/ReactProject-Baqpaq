import { initializeApp } from 'firebase/app';

// This is specifying how we can auth your start in
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1RA56euBjlIeds4RlyR_mdmGfIkeLs1M",
    authDomain: "baqpaq-db.firebaseapp.com",
    projectId: "baqpaq-db",
    storageBucket: "baqpaq-db.appspot.com",
    messagingSenderId: "64990767268",
    appId: "1:64990767268:web:d4467cd1ff544754a15e31"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// in order to use Google auth, you need to initiate a provider instance
const provider = new GoogleAuthProvider();

// sets the custom settings for the provider
// the custom setting we chose is just to select an account
provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);