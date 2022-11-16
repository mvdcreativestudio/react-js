import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAspuoN0UxVdkJtSwM3szBfoPpuH4Xy3os",
  authDomain: "quiamvd.firebaseapp.com",
  projectId: "quiamvd",
  storageBucket: "quiamvd.appspot.com",
  messagingSenderId: "530464298591",
  appId: "1:530464298591:web:dd8ba50d3fbff7054bedea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Instancia a BDD // 

export const db = getFirestore(app);