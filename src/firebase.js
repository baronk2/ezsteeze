import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDlNT1cUSQthvLdZK99jp0UziqR2U9sah8",
    authDomain: "ezsteeze-1e6b7.firebaseapp.com",
    projectId: "ezsteeze-1e6b7",
    storageBucket: "ezsteeze-1e6b7.appspot.com",
    messagingSenderId: "949953590046",
    appId: "1:949953590046:web:55108d25ac6306a0770f0f",

    databaseURL: "https://ezsteeze-1e6b7-default-rtdb.firebaseio.com/"
  };

const app = initializeApp(firebaseConfig);

export default app;

export const db = getDatabase(app);