import { useRef } from "react";

function SetPassword(props) {
  const input = useRef(null);
  return (
    <>
      <label htmlFor="password">Contrasenya:</label>
      <input
        ref={input}
        name="password"
        type="password"
        autoFocus
        onKeyPress={(e) => {
          if (e.key === "Enter") props.set(e.target.value);
        }}
      />
      <button onClick={() => props.set(input.current.value)}>
        Iniciar sessió
      </button>
    </>
  );
}

export default SetPassword;
