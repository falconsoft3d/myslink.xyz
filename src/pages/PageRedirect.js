import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {collection, onSnapshot, deleteDoc, doc, query, orderBy, where} from 'firebase/firestore';
import {db} from "../firebase/firebaseConfig";
import { useNavigate, Redirect } from 'react-router-dom';

export default function PageRedirect() {
  const navigate = useNavigate();
  const params = useParams();
  const urlq = params.id
  console.log("urlq", urlq)
  
  // [ 1 ] Buscamos al URL en Firebase
  const myquery = query(
    collection(db, 'links'),
    where('linkq', '==', urlq)
  );
  
  
  console.log("myquery", myquery)
  
  
  onSnapshot(myquery,
    (snapshot) => {
        const data = snapshot.docs.map((documento) => {
            return {...documento.data(), id: documento.id}
        })
        console.log(data);

        if (data.length > 0) {
             //  window.location.href = data.url
             window.location.href =data.url ;
             
             return null;
        } else {
            navigate('/');
        }
    },
    (error) => {
        navigate('/');
        console.log(error);
    }
);

  
  return (
    null
  )
}