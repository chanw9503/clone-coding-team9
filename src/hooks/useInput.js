/**
 *
 * 작성자 : 박찬우
 * 목적 : input에 대한 custom hook 제작
 * 작성 날짜 : 2023.03.25
 *
 */

import React, { useState } from 'react';

function useInput() {
  const [value, setValue] = useState('');

  const handler = (e) => {
    setValue(e.target.value);
  };

  const handleChange = (item) => {
    setValue(item);
  };

  return [value, handler, handleChange];
}

export default useInput;
