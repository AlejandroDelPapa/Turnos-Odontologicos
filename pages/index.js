import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function App() {
  const router = useRouter()


  function navigateToPacientes() {
    // this is another example on how to navigate using the useRouter hook
    console.log('some stuff here');
    router.push('/pacientes')
  }

  function navigateToAlumnos() {
    // this is another example on how to navigate using the useRouter hook
    router.push('/alumnos')
  }

  return (
    <div>
      <header>
        <h1>Banco de pacientes, frente odontológico estudiantil</h1>
      </header>
      <main>
        <div>
          <button onClick={navigateToPacientes}>Pacientes</button>
        </div>
        <div>
        <button onClick={navigateToAlumnos}>Alumnos</button>
        </div>
      </main>
    </div>
  );
}
