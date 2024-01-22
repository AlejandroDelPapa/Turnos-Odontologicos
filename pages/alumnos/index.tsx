import React from 'react';
import styles from './Alumnos.module.css';
import { useState, useEffect } from 'react'
import type { Alumno } from '../api/alumnos/types'

export default function Alumnos() {
  const [data, setData] = useState<Alumno[]>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    // hay que ver bien como cambiar la ruta que se genera para la api, o sea tener un router a nivel de api
    fetch('/api/alumnos/alumnos')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No alumnos yet!</p>

  function renderAlumno(alumno: Alumno) {
    return (
      <div>
        <p className={styles.red}>
          <span>Id: </span>
          {alumno.id}
        </p>
        <p>
          <span>First name: </span>
          {alumno.firstName}
        </p>
        <p>
          <span>Last name: </span>
          {alumno.lastName}
        </p>
      </div>
    )
  }

  return (
    <div>
      <header>
        <h1>Alumnos</h1>
      </header>
      <main>
        <div>
          {data.map((alumno) => renderAlumno(alumno))}
        </div>
      </main>
    </div>
  );
};
