import { useRouter } from 'next/router';

export default function Turno() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Turno para {id}</h1>
      {/* Contenido de la página de turno */}
    </div>
  );
}
