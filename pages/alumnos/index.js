import React from 'react';
import styles from './Alumnos.module.css';

export default function Alumnos() {
  return (
    <div>
      <header>
        <h1>Alumnos</h1>
      </header>
      <main>
        <div className={styles.red}>Alumnos page</div>
      </main>
    </div>
  );
};
