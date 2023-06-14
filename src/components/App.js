import { NavBar } from './NavBar.js';
import Footer from './Footer.js';
import { Gallery } from './Gallery.js';
import { AppointmentSchedule } from './AppointmentSchedule.js';
import { AboutUs } from './AboutUs.js'; 
import {
  EquipmentSelection,
  PreviousRental,
  RiderInformation,
  EquipmentDBOptions,
  ReserveEquipment
} from './EquipmentSelection.js';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


// Firebase Sign-In imports
import firebaseApp, { db } from '../firebase';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import SignIn from './SignIn.js';

import { useState, useEffect } from 'react';

import { ref, onValue, off } from 'firebase/database';


const auth = getAuth();

const dbRef = ref(db);

onAuthStateChanged(auth, (firebaseUser) => {
  if(firebaseUser){ //firebaseUser defined: is logged in
      console.log('logged in', firebaseUser.displayName);
      //do something with firebaseUser (e.g. assign to a state variable)
  }
  else { //firebaseUser is undefined: is not logged in
      console.log('logged out');
  }
});


export function App(props) {
  const auth = getAuth(firebaseApp);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [data, setData] = useState({});


  useEffect(() => {
    const fetchData = () => {
      onValue(dbRef, (snapshot) => {
        const dataOnValue = snapshot.val();  
        setData(dataOnValue);
      });
    };

    fetchData();

    // Clean up the listener when the component unmounts
    return () => {
      off(dbRef);
    };
  }, []);

  useEffect(() => {
    // console.log("data:");
    // console.log(data);
  }, [data]);
  
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out successfully');
        setUser(null); // Call setUser with null to reset the user state
        navigate("/sign-in");
      })
      .catch((error) => {
        console.log('Error signing out:', error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        console.log('User signed in:', firebaseUser);
        setUser(firebaseUser);
      } else {
        console.log('User signed out');
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);


  return (
    <div>
      <NavBar user={user} setUser={setUser} handleSignOut={handleSignOut} />
      <div>
        <Routes>
          <Route path='/about' element={<AboutUs />} />
          <Route path='/appointment' element={<AppointmentSchedule user={user} data={data} setData={setData} />} />
          <Route path='/equipment-selection' element={<EquipmentSelection user={user} data={data} setData={setData} />} />
          <Route path='/previous-rental' element={<PreviousRental user={user} data={data} setData={setData} />} />
          <Route path='/rider-information' element={<RiderInformation user={user} data={data} setData={setData} />} />
          <Route path='/equipment-db-options' element={<EquipmentDBOptions user={user} data={data} setData={setData} />} />
          <Route path='/reserve-equipment' element={<ReserveEquipment user={user} data={data} setData={setData} />} />
          <Route path='/home' element={<><Gallery /></>} />
          <Route path='/sign-in' element={<SignIn setUser={setUser} user={user} auth={auth} handleSignOut={handleSignOut} />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div >
  );
}
