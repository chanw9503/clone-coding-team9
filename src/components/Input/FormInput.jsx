import React from "react";
import { StInput, StContainer, StTilte, StLabel} from "./Styles";

function FormInput(props) {
  return (
    <StContainer>
      <StTilte fontsize={props.fontsize} htmlFor={props.id}>
        {props.label}
      </StTilte>
      <StLabel>{props.label}</StLabel>
      <StInput
        required
        size={props.size}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        ref={props.ref}
      />
      {props.isError ? <div>{props.error}</div> : null}
    </StContainer>
  );
}

export default FormInput;
