import { useState } from "react";
import "./LoginModal";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="login-form-div">
      <label>
        <div className="login-label-1">
          <div className="login-label-1-content">{label}</div>
        </div>
        <div>
          <div className="login-label-1-inputdiv">
            <input { ...inputProps } onChange={onChange} onBlur={handleFocus} onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)} focused={focused.toString()} />
          </div>
        </div>
      </label>
      {/* <span>{errorMessage}</span> */}
    </div>
  );
};

export default FormInput;
