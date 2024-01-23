import React from 'react';
import { useRouter } from 'next/router'
import {Button} from "@nextui-org/button";

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
        <h1 className="text-3xl font-bold underline">
          Hola Joaco
        </h1>
      </header>
      <main>
        <div>
          <button onClick={navigateToPacientes}>Pacientes</button>
        </div>
        <div>
          <Button color='primary' onClick={navigateToAlumnos}>Alumnos</Button>
        </div>
      </main>
    </div>
  );
}
