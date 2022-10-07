import { useEffect } from "react";

export default function IniciaSessio({ username, password }) {
  useEffect(() => {
    async function fetchData() {
      fetch(
        `https://isurt.hopto.org/iniciar-sessio.php?usuari=${username}&contrasenya=${password}`
      )
        .then((response) => response.text())
        .then(console.log);
    }
    fetchData();
  });
  return <p>Carregant...</p>;
}
