import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCM3rU49bs6re8AqH50oKUYBuLfwS0C2BU",
  authDomain: "prueba-yiga5.firebaseapp.com",
  projectId: "prueba-yiga5",
  storageBucket: "prueba-yiga5.appspot.com",
  messagingSenderId: "949443440221",
  appId: "1:949443440221:web:83cbfc7781a5a83dc1e7b4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
