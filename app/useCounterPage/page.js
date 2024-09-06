'use client'

import React from 'react';
import useCounter from '@/hooks/useCounter'; // Ajuste o caminho conforme a estrutura do seu projeto
import styles from './UseCounterPage.module.css';

const CounterComponent = () => {
  // Utiliza o hook useCounter com valor inicial de 0
  const [count, increment, decrement, reset] = useCounter(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contador: {count}</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={increment}>Adicionar</button>
        <button className={styles.button} onClick={decrement}>Remover</button>
        <button className={styles.button} onClick={reset}>Resetar</button>
      </div>
    </div>
  );
};

export default CounterComponent;
