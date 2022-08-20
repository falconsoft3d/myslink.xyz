import React from 'react';
import { useParams } from 'react-router-dom';

export default function Redirect() {
  const params = useParams();
  const ulrq = params.d
  // Buscamos al URL en Firebase
  
  return (
    <div>Redirect</div>
  )
}
