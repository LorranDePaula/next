'use client'

import React, { useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage'; // Supondo que o hook está no arquivo useLocalStorage.js
import styles from './useLocalStoragePage.module.css'; // Supondo que você tenha um arquivo CSS para estilização

const LocalStorageList = () => {
  const [items, setItems] = useLocalStorage('items', []); // 'items' é a chave no localStorage e [] é o valor inicial
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() === '') return;

    setItems(prevItems => [...prevItems, inputValue]);
    setInputValue('');
  };

  const handleRemoveItem = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <h1>Lista de Itens</h1>
      <div className={styles.inputContainer}>
        <input className={styles.input}
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Adicionar novo item" 
        />
        <button className={styles.button} onClick={handleAddItem}>Adicionar</button>
      </div>
      <ul className={styles.itemList}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {item}
            <button onClick={() => handleRemoveItem(index)} className={styles.removeButton}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocalStorageList;
