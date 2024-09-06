'use client'

import React from 'react';
import useToggle from '@/hooks/useToggle'; 
import styles from './useTogglePage.module.css';


const ToggleText = () => {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div className={styles.container}>
      <div>
      <button className={styles.button} onClick={toggleVisibility}>
        {isVisible ? 'Esconder Texto' : 'Mostrar Texto'}
      </button>
      {isVisible && <p>Clube de Regatas do Flamengo.</p>}
      </div>
    </div>
  );
};

export default ToggleText;

