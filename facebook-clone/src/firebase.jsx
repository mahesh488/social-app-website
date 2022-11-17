import firebase from 'firebase';
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBhVe-nopvaCUTy8Y3cUr6mZMTGRVR2-j8",
    authDomain: "facebook-clone-yt-69f67.firebaseapp.com",
    projectId: "facebook-clone-yt-69f67",
    storageBucket: "facebook-clone-yt-69f67.appspot.com",
    messagingSenderId: "177092841276",
    appId: "1:177092841276:web:cf0ba8a45fb0f4c565d839"
  });
  const auth=firebase.auth();
  const provider=new firebase.auth.FacebookAuthProvider();
  const db=firebaseConfig.firestore();
  const storage=firebase.storage();
  export {auth,provider,db,storage}