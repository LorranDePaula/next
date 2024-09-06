'use client';
 
import React, { useState } from 'react';
import useDocumentTitle from '@/hooks/useDocumentTittle';
import styles from './useDocumentTittlePage.module.css'; // Importa o CSS
 
function App() {
  const [inputValue, setInputValue] = useState(''); // Valor temporário para o input
 
  useDocumentTitle(inputValue); // Atualiza o título do documento com base no input
 
  // Função para confirmar a atualização da página
  const handlePageReload = () => {
    if (window.confirm('Tem certeza que deseja atualizar a página?')) {
      window.location.reload(); // Recarrega a página
    }
  };
 
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Atualize o título da página</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite o novo título..."
          className={styles.inputField}
        />
        <p className={styles.currentTitle}>Título atual: {inputValue}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handlePageReload}>
          Confirmar Atualização
        </button>
      </div>
    </div>
  );
}
 
export default App;
