import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBLLlOzfBhPqRrvsUhvnduMMojTOFe59ig",
    authDomain: "portifolio2-6f542.firebaseapp.com",
    projectId: "portifolio2-6f542",
    storageBucket: "portifolio2-6f542.appspot.com",
    messagingSenderId: "1045973278542",
    appId: "1:1045973278542:web:794f511b40e1e27277081f",
    measurementId: "G-V5E8VMNZ65"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;