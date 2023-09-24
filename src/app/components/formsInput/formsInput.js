import "./styles.css";
export const FormsInput = ({ placeholder, type, icon }) => {
  return (
    <>
      <div className="input">
        <i className={icon}></i>
        <input placeholder={placeholder} type={type}></input>
      </div>
    </>
  );
};
