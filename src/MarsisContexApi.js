import React, { useEffect, useState } from 'react';
import  { createContext } from "react";

// firabes
import {db} from './firebase';
import {collection, getDocs} from 'firebase/firestore';

const MarsisContext = createContext();

export const MarsisProvider = ({children}) => {

  const [valuesAracSarj,setValuesAracSarj] = useState([]);
  const [valuesDoluBos,setValuesDoluBos] = useState([]);
  const [valuesTurnike,setValuesTurnike] = useState([]);
  const [valuesOtopark,setValuesOtopark] = useState([]);
  const [valuesYazılım,setValuesYazılım] = useState([]);
  const [valuesKafe,setValuesKafe] = useState([]);

  const userCollectionRef = collection(db,'Araç Şarj Sistemleri');
  const userCollectionRef2 = collection(db,'Dolu-Boş Sistemi');
  const userCollectionRef3 = collection(db,'Turnike Sistemi');
  const userCollectionRef4 = collection(db,'Otopark Sistemi');
  const userCollectionRef5 = collection(db,'Kafe Yönetim Sistemleri');
  const userCollectionRef6 = collection(db,'Yazılım Hizmetleri');
  
  useEffect(()=>{ // Araç Şarj Sistemleri
    const getAracSarj = async () => {
      const data = await getDocs(userCollectionRef);
      setValuesAracSarj(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
    }

    getAracSarj();
    // eslint-disable-next-line
  },[])

  useEffect(()=>{ //Dolu-Boş Sistemi
    const getDoluBos = async () => {
      const data = await getDocs(userCollectionRef2);
      setValuesDoluBos(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
    }

    getDoluBos();
    // eslint-disable-next-line
  },[])

  useEffect(()=>{ //Turnike Sistemi
    const getTurnike = async () => {
      const data = await getDocs(userCollectionRef3);
      setValuesTurnike(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
    }

    getTurnike();
    // eslint-disable-next-line
  },[])

  useEffect(()=>{ //Otopark Sistemi
    const getOtopark = async () => {
      const data = await getDocs(userCollectionRef4);
      setValuesOtopark(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
    }

    getOtopark();
    // eslint-disable-next-line
  },[])

  useEffect(()=>{ //Kafe Yönetim Sistemleri
    const getKafe = async () => {
      const data = await getDocs(userCollectionRef5);
      setValuesKafe(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
    }

    getKafe();
    // eslint-disable-next-line
  },[])

  useEffect(()=>{ //Yazılım Hizmetleri
    const getYazılım = async () => {
      const data = await getDocs(userCollectionRef6);
      setValuesYazılım(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
    }

    getYazılım();
    // eslint-disable-next-line
  },[])

    return (
        <MarsisContext.Provider 
            value={{
              valuesAracSarj,
              valuesDoluBos,
              valuesTurnike,
              valuesYazılım,
              valuesOtopark,
              valuesKafe

            }}
        >
            {children}
        </MarsisContext.Provider>
    )

}

export default MarsisContext;