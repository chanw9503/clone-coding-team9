import styled from 'styled-components'
import React, { useState } from 'react'

function Select({options,defaultValue,value,onChange}) {

  const [seleted, setSeleted] =useState(value || '');

  const optionHandlerChange =(e) => {
    const newValue = e.target.value;
    setSeleted(newValue);
    onChange && onChange(newValue);
  };

    return (
        <SelectInput value={seleted} onChange={optionHandlerChange}>
          {defaultValue  && (
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

const SelectInput= styled.select`
    font-size: 15px;
    width: 100%;
    transition: border-color .2s,box-shadow .2s,background-color .2s;
    display: block;
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    color: #424242;
    padding: 0 15px;
    padding-right: 30px;
`