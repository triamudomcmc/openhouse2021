import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/functions'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA_WCOujp4d40OCisRt9RIt9FEYM3GJwhs',
  authDomain: 'triamudomoph2021.firebaseapp.com',
  projectId: 'triamudomoph2021',
  storageBucket: 'triamudomoph2021.appspot.com',
  messagingSenderId: '823372748071',
  appId: '1:823372748071:web:854a1b819b64b14ba30502',
  measurementId: 'G-VY3HGDVNWY'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.app().functions('asia-east2')
}

export default firebase
