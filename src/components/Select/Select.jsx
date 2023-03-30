import React, { useState } from 'react';
import { SelectInput } from './styles';
function Select({ options, defaultValue, value, onChange, validate }) {
  if (validate === undefined) validate = true;
  const [seleted, setSeleted] = useState(value || '');

  const optionHandlerChange = (e) => {
    const newValue = e.target.value;
    setSeleted(newValue);
    onChange && onChange(newValue);
  };

  return (
    <SelectInput value={seleted} onChange={optionHandlerChange} validate={validate}>
      {defaultValue && (
        <option value="" disabled>
          {defaultValue}
        </option>
      )}
      {options?.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </SelectInput>
  );
}
export default Select;
