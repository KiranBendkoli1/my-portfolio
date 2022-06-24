// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq2NSbp75s4BfA-dAMjBTfDCvKJotbcbI",
  authDomain: "kiranbendkoli-portfolio.firebaseapp.com",
  projectId: "kiranbendkoli-portfolio",
  storageBucket: "kiranbendkoli-portfolio.appspot.com",
  messagingSenderId: "806475232110",
  appId: "1:806475232110:web:3b5473143cf63f120d477f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const date = new Date();
const dt = date.toLocaleDateString() + "  " + date.toLocaleTimeString();
export const Upload = async (name, email, message) => {
  const docData =  {
    "name":name,
    "email":email,
    "date":dt,
    "message":message
  }
  await setDoc(doc(db,"messages"),docData);
};

export {db}