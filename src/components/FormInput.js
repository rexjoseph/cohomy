import { useState } from "react";
import "./LoginModal";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="inputDiv">
      <label className="registerFormLabel" htmlFor="firstName">
        {label}
      </label>
      <input
        {...inputProps}
        className="registerFormInput"
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span className="check-errors">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
