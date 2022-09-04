import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBxFqJZaJcw_hpwMW8LeOja57tZp6Ju1_Q",
  authDomain: "student-attendance-5ea96.firebaseapp.com",
  databaseURL: "https://student-attendance-5ea96.firebaseio.com",
  projectId: "student-attendance-5ea96", 
  storageBucket: "student-attendance-5ea96.appspot.com",
  messagingSenderId: "268121193127",
  appId: "1:268121193127:web:4ffe55fb19c0bc81a9f982"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
