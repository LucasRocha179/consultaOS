import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAf1VOaAl-8Xk0FCsJMMD9XqtqYAMtBU0g",
  authDomain: "minha-ordem-de-servico.firebaseapp.com",
  databaseURL: "https://minha-ordem-de-servico.firebaseio.com",
  projectId: "minha-ordem-de-servico",
  storageBucket: "minha-ordem-de-servico.appspot.com",
  messagingSenderId: "456221448848",
  appId: "1:456221448848:web:d182c7f24eaa2d4a3c5615",
  measurementId: "G-XVE2G5K972"
};
  // Initialize Firebase
let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()
