import React, { useState } from "react";

import api from "./services/api";
import "./style.css";

function App() {
  const [numeroCasas, setNumeroCasas] = useState(0);
  const [text, setText] = useState("");
  const [answer, setAnswer] = useState("");

  function handleSomaCasa() {
    if (numeroCasas === 25) {
      return;
    }
    setNumeroCasas(numeroCasas + 1);
  }

  function handleDiminuiCasa() {
    if (numeroCasas === 0) {
      return;
    }
    setNumeroCasas(numeroCasas - 1);
  }

  async function handleCripto(content, numberCripto, option) {
    const data = {
      content,
      numberCripto,
      option
    };

    await api.post("cripto", data).then(response => {
      setAnswer(response.data);
    });
  }

  return (
    <div className="main-container">
      <h1>CRIPTOGRAFIA DE JÚLIO CÉSAR</h1>

      <div className="data-container">
        <span>Número de casas</span>
        <button onClick={() => handleSomaCasa()}>+</button>
        <h2>{numeroCasas}</h2>
        <button onClick={() => handleDiminuiCasa()}>-</button>
        <textarea
          placeholder="Texto a ser criptografado/descriptografado"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>

      <div className="button-container">
        <button onClick={() => handleCripto(text, numeroCasas, "code")}>
          ENCRIPTOGRAFAR
        </button>
        <button onClick={() => handleCripto(text, numeroCasas, "decode")}>
          DESCRIPTOGRAFAR
        </button>
      </div>

      <h3>{answer}</h3>
    </div>
  );
}

export default App;
