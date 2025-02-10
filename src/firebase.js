import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyCmCr6Nw0RXAcNN1Rkz7Qvd3gwNXKwNkJU',
  authDomain: 'integration-iu-tp3.firebaseapp.com',
  projectId: 'integration-iu-tp3',
  storageBucket: 'integration-iu-tp3.firebasestorage.app',
  messagingSenderId: '161766799816',
  appId: '1:161766799816:web:167f31cba33aa9b760a8fd',
  measurementId: 'G-N7GF60F4D2',
}

// Initialisation de Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const db = getFirestore(app)

const provider = new GoogleAuthProvider()

export { auth, provider, db }
