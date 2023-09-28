import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCewzjmExBiXJN_C3EoCeyn01LZOdB8MXQ",
  authDomain: "reactlinks-a4be2.firebaseapp.com",
  projectId: "reactlinks-a4be2",
  storageBucket: "reactlinks-a4be2.appspot.com",
  messagingSenderId: "262471715028",
  appId: "1:262471715028:web:250010c59024c507fc1341"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }