import { useEffect, useState } from "react";
import TextInputScreen from "./TextInputScreen";

enum Status {
  SET_USERNAME,
  SET_PASSWORD,
  SIGNING_IN,
  INCORRECT_CREDENTIALS,
}

export default function SignIn({
  username,
  password,
  setUsername,
  setPassword,
  signedIn,
}: {
  username: string;
  password: string;
  setUsername: (arg: string) => void;
  setPassword: (arg: string) => void;
  signedIn: (type: string) => void;
}) {
  const [status, setStatus] = useState<Status>(Status.SET_USERNAME);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://isurt.hopto.org/iniciar-sessio.php?usuari=${username}&contrasenya=${password}`
      );

      if (response.status === 200) return signedIn(await response.text());
      if (response.status === 403) setStatus(Status.INCORRECT_CREDENTIALS);
    }
    if (status === Status.SIGNING_IN) fetchData();
  });

  return (
    <>
      <header>
        <img src="/logo.svg" alt="Logo d'iSurt" width="50px" height="50px" />
        <h1>iSurt</h1>
      </header>
      <main>
        {status === Status.SET_USERNAME ? (
          <TextInputScreen
            value={username}
            onChange={setUsername}
            name="username"
            label="Nom d'usuari:"
            next={() => setStatus(Status.SET_PASSWORD)}
          />
        ) : (
          <>
            <TextInputScreen
              value={password}
              onChange={setPassword}
              type="password"
              name="password"
              label="Contrasenya:"
              nextLabel="Inicia sessió"
              disabled={status === Status.SIGNING_IN}
              next={() => setStatus(Status.SIGNING_IN)}
              back={() => {
                setPassword("");
                setStatus(Status.SET_USERNAME);
              }}
            />
            {status === Status.INCORRECT_CREDENTIALS && (
              <p>Usuari o contrasenya incorrectes</p>
            )}
          </>
        )}
      </main>
    </>
  );
}
