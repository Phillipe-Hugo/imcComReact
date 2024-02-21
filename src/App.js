import React, { useState } from 'react';
import './App.css';
function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));
  };
  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <label>
        Altura (cm):
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </label>
      <br />
      <label>
        Peso (kg):
        <input className='segundoinput' type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </label>
      <br />
      <button onClick={calcularIMC}>Calcular IMC</button> 
      {imc !== null && (
        <div>
          <h2>Seu IMC é: {imc}</h2>
        </div>
      )}
    </div>
  );
}
export default App;
