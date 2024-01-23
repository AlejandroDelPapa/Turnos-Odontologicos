import React from 'react';
import Link from 'next/link'
import {Button} from "@nextui-org/button";
import { useRouter } from 'next/router'

function App() {
  const router = useRouter()

  function navigateToAlumnos() {
    router.push('/alumnos')
  }

  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold underline">
          Banco de pacientes, frente odontológico estudiantil
        </h1>
      </header>
      <main>
        <div>
          <Link href="/pacientes">Pacientes</Link>
        </div>
        <div>
          <Button color='primary' onClick={navigateToAlumnos}>Alumnos</Button>
        </div>
      </main>
    </div>
  );
}

export default App;
