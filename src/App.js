import logo from './logo.svg';
import './App.css';
import React from 'react';

function linha(valor) {
  return (
  <li> O valor contido na linha é: {valor}. </li>
  );
}

class App extends React.Component {

  valores = [11, 85, 3, 22, 70];

  render() {

    const linhas = this.valores.map((x) => linha(x));

    return (
      <div>
        <h2> Lista de números do {this.props.nome} </h2>
        <ul>
          {linhas}
        </ul>
      </div>
    );
  }
}

export default App;
