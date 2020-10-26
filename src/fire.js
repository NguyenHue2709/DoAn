// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyAi1mahL5AS2qiZ-NNavFjWcRVdn4ry_I4",
    authDomain: "login-c36b7.firebaseapp.com",
    databaseURL: "https://login-c36b7.firebaseio.com",
    projectId: "login-c36b7",
    storageBucket: "login-c36b7.appspot.com",
    messagingSenderId: "232113818348",
    appId: "1:232113818348:web:b85174a5895dc9117db3c9",
    measurementId: "G-68F9VR3QWW"
  };


  
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;