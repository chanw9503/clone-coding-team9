import React from 'react';
import { StInput, StContainer, StTilte, StLabel, StyledErrorBlock } from './Styles';

function FormInput(props) {
  return (
    <StContainer>
      <StTilte fontsize={props.fontsize} htmlFor={props.id} isError={props.isError}>
        {props.label}
      </StTilte>
      <StLabel>{props.labelcomment}</StLabel>
      <StInput
        required
        size={props.size}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        ref={props.reference}
        isError={props.isError}
      />
      {props.isError ? null : <StyledErrorBlock>{props.error}</StyledErrorBlock>}
    </StContainer>
  );
}

export default FormInput;
