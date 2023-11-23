
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCXuXMUOEg6LwZfoDRNTWSdcPCyxRAKntk",
  authDomain: "webcarros-21112023.firebaseapp.com",
  projectId: "webcarros-21112023",
  storageBucket: "webcarros-21112023.appspot.com",
  messagingSenderId: "399682125181",
  appId: "1:399682125181:web:16d01857e3e497cac56014"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };


