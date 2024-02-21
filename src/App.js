// Importa o React e a função useState do React
import React, { useState } from 'react';

// Importa o arquivo CSS para estilizar o componente
import './App.css';

// Cria o componente principal chamado App
function App() {
  // Define três estados utilizando a função useState
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

  // Define uma função chamada calcularIMC
  const calcularIMC = () => {
    // Converte a altura para metros, pois a entrada está em centímetros
    const alturaMetros = altura / 100;

    // Calcula o IMC utilizando a fórmula: peso / (altura * altura)
    const imcCalculado = peso / (alturaMetros * alturaMetros);

    // Define o estado do IMC com o valor calculado, arredondado para 2 casas decimais
    setImc(imcCalculado.toFixed(2));
  };

  // Retorna a estrutura do componente
  return (
    <div className="App">
      {/* Título do aplicativo */}
      <h1>Calculadora de IMC</h1>

      {/* Campo de entrada para a altura */}
      <label>
        Altura (cm):
        {/* Input controlado - value é controlado pelo estado altura */}
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </label>
      <br />

      {/* Campo de entrada para o peso */}
      <label>
        Peso (kg):
        {/* Input controlado - value é controlado pelo estado peso */}
        <input className='segundoinput' type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </label>
      <br />

      {/* Botão que chama a função calcularIMC quando clicado */}
      <button onClick={calcularIMC}>Calcular IMC</button> 

      {/* Condição para exibir o resultado do IMC se estiver calculado */}
      {imc !== null && (
        <div>
          {/* Título do resultado e exibição do valor calculado */}
          <h2>Seu IMC é: {imc}</h2>

          {/* Aqui você pode adicionar a lógica para exibir a classificação */}
        </div>
      )}
    </div>
  );
}

// Exporta o componente App para ser utilizado em outros arquivos
export default App;
