import React, { useState, useContext, useEffect } from 'react';
import {auth} from './../firebase/firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";

// Creamos el contexto;
const AuthContext = React.createContext();

// Hook para acceder al contexto
const useAuth = () => {
	return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
	const [user, setUser] = useState();
	// Creamos un state para saber cuando termina de 
	// cargar la comprobacion de onAuthStateChanged
	const [loading, setLoading] = useState(true);
	// Efecto para ejecutar la comprobacion una sola vez.
	useEffect(() => {
		// Comprobamos si hay un usuario.
		const cancelSubscription = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});

		return cancelSubscription;
	}, []);

	return (
		<AuthContext.Provider value={{user: user}}>
			{/* Solamente retornamos los elementos hijos cuando no este cargando. 
			De esta forma nos aseguramos de no cargar el resto de la app hasta que el usuario haya sido establecido.
			
			Si no hacemos esto al refrescar la pagina el componente children intenta cargar inmediatamente, 
			antes de haber comprobado que existe un usuario. */}
			{!loading && children}
		</AuthContext.Provider>
	);
}
 
export {AuthProvider, AuthContext, useAuth};