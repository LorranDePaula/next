'use client'

import React from 'react';
import useClickCounter from '@/hooks/useClickCounter';
import styles from './ContadorDeCliques.module.css';

function ContadorDeCliques() {
    const [count, increment] = useClickCounter();

    return (
        <div className={styles.container}>
            <div>
                <p>Você clicou {count} vezes</p>
                <button className={styles.button} onClick={increment}>Clique aqui</button>
            </div>
        </div>
    );
}

export default ContadorDeCliques;


