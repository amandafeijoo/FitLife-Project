import React, { useState } from 'react';

function Reservar() {
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    // Aquí debes implementar la lógica de inicio de sesión.
    // Si el inicio de sesión es exitoso, establece el estado del usuario.
    setUser({ username, password });
  };

  const handleLogout = () => {
    // Aquí debes implementar la lógica de cierre de sesión.
    // Cuando el usuario cierra la sesión, borra el estado del usuario.
    setUser(null);
  };

  if (user === null) {
    return (
      <div>
        <h1>Iniciar sesión</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin(e.target.username.value, e.target.password.value);
        }}>
          <input name="username" type="text" placeholder="Usuario" />
          <input name="password" type="password" placeholder="Contraseña" />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Bienvenido, {user.username}</h1>
        <button onClick={handleLogout}>Cerrar sesión</button>
        {/* Aquí puedes agregar más información y opciones para el usuario */}
      </div>
    );
  }
}

export default Reservar;