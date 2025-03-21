import React from 'react';
import './style.css'
import logo from './img/logo-gatos-unidos.png';
import nuevoAmigo1 from './img/nuevoamigo1.jpg';
import nuevoAmigo2 from './img/nuevoamigo2.jpg';
import nuevoAmigo3 from './img/nuevoamigo3.jpg';
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <img src={logo} width={100} height={90} className="imgLogo" />
          <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">¿Quiénes Somos?</a></li>
            <li><a href="">Clínicas</a></li>
            <li><a href="">Colabora</a></li>
            <li><a href="">Contacto</a></li>
            <li><a href="">Area personal</a></li>
          </ul>
        </nav>
      </header>
      <div className="Content">
        <table>
          <tr> <th colSpan={3}> Nuestros nuevos amigos </th> </tr>
          <tr>
            <td> Bollito <img src={nuevoAmigo1} alt="" className="imgGato" /> </td>
            <td> Naranjito <img src={nuevoAmigo2} alt="" className="imgGato" /> </td>
            <td> Arigato <img src={nuevoAmigo3} alt="" className="imgGato" /> </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
