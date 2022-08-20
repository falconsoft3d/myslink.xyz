import { useParams } from 'react-router-dom';
import {collection, onSnapshot, query, where} from 'firebase/firestore';
import {db} from "../firebase/firebaseConfig";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function PageRedirect() {
  const navigate = useNavigate();
  const params = useParams();
  const urlq = params.id
  const [lurl, setlurl] = useState("")
  const myquery = query(
    collection(db, 'links'),
    where('linkq', '==', urlq)
  );

  onSnapshot(myquery,
    (snapshot) => {
        const data = snapshot.docs.map((documento) => {
            return {...documento.data(), id: documento.id}
        })
        if (data.length > 0) {
             setlurl(data[0].link)
        } else {
            navigate("/")
        }
    },
    (error) => {
        navigate('/');
    }
)

  return (
    lurl ? ( window.location = lurl ) : navigate('/')
  )
}
