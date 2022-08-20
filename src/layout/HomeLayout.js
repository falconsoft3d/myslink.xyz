import React from 'react';
import NavBar from '../components/NavBar';


export default function HomeLayout(props) {
    const {children} = props;
  return (
    <>
    
    <NavBar />
          {children}
    </>
  )
}