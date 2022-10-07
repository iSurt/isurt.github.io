import "./App.css";
import { useState } from "react";
import SetUsername from "./components/SetUsername";
import SetPassword from "./components/SetPassword";
import SignIn from "./components/SignIn";

export default function App() {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);

  return (
    <div id="app">
      <header>
        <img src="/logo.svg" alt="Logo d'iSurt" width="50px" height="50px" />
        <h1>iSurt</h1>
      </header>
      <main>
        {!username ? (
          <SetUsername set={setUsername} />
        ) : !password ? (
          <SetPassword set={setPassword} />
        ) : (
          <SignIn username={username} password={password} />
        )}
      </main>
    </div>
  );
}
