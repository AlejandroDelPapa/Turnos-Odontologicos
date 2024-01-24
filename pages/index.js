import React from 'react';
import { useRouter } from 'next/router'
import {Button} from "@nextui-org/button";
import Image from 'next/image'
import { Image as NextUiImage }  from "@nextui-org/image";

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
          Banco de pacientes, frente odontológico estudiantil
        </h1>
      </header>
      <main>
        <div>
          <button onClick={navigateToPacientes}>Pacientes</button>
        </div>
        <div>
          <Button color='primary' onClick={navigateToAlumnos}>Alumnos</Button>
        </div>
        <div class="my-3 space-y-2">
          <Image src="/images/avatars/avatar.jpeg" alt="me" width="64" height="64" />
          <NextUiImage
            width={64}
            alt="NextUI hero Image"
            src="/images/avatars/avatar.jpeg"
          />
        </div>
      </main>
    </div>
  );
}
