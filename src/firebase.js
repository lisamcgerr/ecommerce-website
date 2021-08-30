import {firebase} from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC68JZJS9KhZ4Ro_L22JjD09iMuPNiFsnA",
    authDomain: "ecommerce-website-347a6.firebaseapp.com",
    projectId: "ecommerce-website-347a6",
    storageBucket: "ecommerce-website-347a6.appspot.com",
    messagingSenderId: "177321378494",
    appId: "1:177321378494:web:9e62fdafe871f5b70214ef",
    measurementId: "G-T4ZPSE0ZRZ"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  //firestore is the database in firebase 
  export const db = firebaseApp.firestore()
  export const auth = firebase.auth()