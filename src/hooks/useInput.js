import React, { useState } from 'react';

function useInput() {
  const [value, setValue] = useState('');

  const handler = (e) => {
    setValue(e.target.value);
  };

  const changeHandler = (item) => {
    setValue(item);
  };

  return [value, handler, changeHandler];
}

export default useInput;
