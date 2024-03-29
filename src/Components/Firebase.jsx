import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);


import React, { useState } from 'react';
import { db, auth } from './Firebase';

function ReservarClase() {
  const [user, setUser] = useState(null);

  // Supongamos que quieres obtener el usuario actual cuando el componente se monta
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    // Limpiar la suscripción cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  // Supongamos que quieres agregar una reserva a la base de datos cuando el usuario hace clic en un botón
  const handleReserve = async () => {
    if (user) {
      await db.collection('reservas').add({
        userId: user.uid,
        // Agrega aquí cualquier otra información que quieras almacenar para la reserva
      });
    }
  };

  return (
    <div>
      {/* Renderiza tu interfaz de usuario aquí */}
      <button onClick={handleReserve}>Reservar Clase</button>
    </div>
  );
}

export default ReservarClase;