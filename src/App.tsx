import "./App.css";
import { useState } from "react";
import SignIn from "./components/SignIn";

enum Status {
  SIGNING_IN,
  TEACHER,
  STUDENT,
}

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<Status>(Status.SIGNING_IN);

  return (
    <div id="app">
      {(() => {
        switch (status) {
          case Status.SIGNING_IN:
            return (
              <SignIn
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                signedIn={(type: string) =>
                  setStatus(
                    type === "Professor" ? Status.TEACHER : Status.STUDENT
                  )
                }
              />
            );
          case Status.TEACHER:
            return <p>Professor</p>;
          case Status.STUDENT:
            return <p>Alumne</p>;
        }
      })()}
    </div>
  );
}
