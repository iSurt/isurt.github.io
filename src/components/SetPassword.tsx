import { useRef } from "react";

function SetPassword({ set }: { set: (password: string) => void }) {
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
          // @ts-ignore
          if (e.key === "Enter") set(e.target.value);
        }}
      />
      <button onClick={() => set((input.current as any).value)}>Següent</button>
    </>
  );
}

export default SetPassword;
