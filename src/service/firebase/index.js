// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { resolve } from "styled-jsx/css";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;



// tareas bloqueantes, no bloqueantes
// tareas sincronicas y asincronicas
// polling o poll
// timers
// callback
// Función declarativa
// función de expresión
// función flecha o arrow function
// IIFE
// parametros y argumentos
// timers (setTimeout, setImmediate)
// colas y pilas
// Promesas













// Función declarativa
// función de expresión
// función flecha o arrow function
// callbacks
// Promesas
// eventos bloqueantes (sincronico)
// eventos no blqueantes (asincronico)
// javascript es mono hilo - multihilo
// polling
// Pilas y Colas
// timers (setTimeout, setImmediate)
// event loop
// IIFE
// parametros y argumentos