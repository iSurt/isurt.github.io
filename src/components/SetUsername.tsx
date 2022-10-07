import { useRef } from "react";

export default function SetUsername(props) {
  const input = useRef(null);
  return (
    <>
      <label htmlFor="username">Nom d&apos;usuari:</label>
      <input
        ref={input}
        name="username"
        autoFocus
        onKeyPress={(e) => {
          if (e.key === "Enter") props.set(e.target.value);
        }}
      />
      <button onClick={() => props.set(input.current.value)}>Següent</button>
    </>
  );
}
