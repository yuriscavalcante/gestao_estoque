import "./styles.css";
export const Button = ({ label, background, color }) => {
  return (
    <>
      <button style={{ background: background, color: color }}>{label}</button>
    </>
  );
};
