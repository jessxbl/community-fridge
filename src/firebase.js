import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBnc8MvkFY9XsJ3uVrT5s6e02xn5FSyYuU",
    authDomain: "community-fridge.firebaseapp.com",
    projectId: "community-fridge",
    storageBucket: "community-fridge.appspot.com",
    messagingSenderId: "163973624359",
    appId: "1:163973624359:web:07de9e8f4f356c140a5402"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
