import { useRef } from "react";

export default function TextInputScreen({
  value,
  onChange,
  next,
  nextLabel = "Següent",
  back,
  type = "text",
  label,
  name,
  disabled = false,
}: {
  value: string;
  onChange: (username: string) => void;
  next: () => void;
  nextLabel?: string;
  back?: () => void;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
}) {
  const input = useRef(null);
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        ref={input}
        name={name}
        value={value}
        disabled={disabled}
        autoFocus
        // @ts-ignore
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") next();
        }}
      />
      <div className="button-row">
        {back && <button onClick={() => back()}>Enrere</button>}
        <button onClick={() => next()} disabled={disabled}>
          {nextLabel}
        </button>
      </div>
    </>
  );
}
