import React from 'react';
import Link from 'next/link'

function App() {
  return (
    <div>
      <header>
        <h1>Banco de pacientes, frente odontológico estudiantil</h1>
      </header>
      <main>
        <div>
          <Link href="/pacientes">Pacientes</Link>
        </div>
        <div>
          <Link href="/alumnos">Alumnos</Link>
        </div>
      </main>
    </div>
  );
}

export default App;
