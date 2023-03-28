import { useState } from 'react';

function useDropBox({ title, list }) {
  const [isShow, setIsShow] = useState(false);

  const close = (timer = 500) => {
    setTimeout(() => {
      setIsShow(false);
    }, timer);
  };

  const open = () => setIsShow(true);
  return { isShow, close, open, title, list };
}

export default useDropBox;
