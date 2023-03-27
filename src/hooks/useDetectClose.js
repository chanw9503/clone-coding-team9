/**
 *
 * 작성자 : 박찬우
 * 목적: 클릭 이벤트를 감지해서 dropbox를 열고 닫는다.
 * 작성날짜 : 2023.03.26
 *
 */

import React, { useEffect, useState, useRef } from 'react';

function useDetectClose(initialState) {
  const [isOpen, SetIsOpen] = useState(initialState);
  const ref = useRef(null);

  //drop box를 열고 닫는다.
  const removeHandler = () => {
    SetIsOpen(!isOpen);
  };

  useEffect(() => {
    const onClick = (e) => {
      console.log('click');
      if (ref.current !== null && !ref.current.contains(e.target)) {
        SetIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isOpen]);

  return [isOpen, ref, removeHandler];
}

export default useDetectClose;
