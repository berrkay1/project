import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCh9iqSE1D0QSAa4gbXi60EuIG5tVEcGI0",
  authDomain: "marsis-22fa4.firebaseapp.com",
  projectId: "marsis-22fa4",
  storageBucket: "marsis-22fa4.appspot.com",
  messagingSenderId: "713311048147",
  appId: "1:713311048147:web:dbfcfead9ce54683701f26",
  measurementId: "G-L4R97BP2GS"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



