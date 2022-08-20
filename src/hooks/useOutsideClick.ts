import { useEffect, useRef } from 'react';

export const useOutsideClick = (callbackFunction: () => void) => {
  const ref = useRef<any>();

  useEffect(() => {
    function handleOutclick(event: MouseEvent) {
      const target = event.target;
      console.log(ref.current === target);
      if (ref.current === target) {
        callbackFunction();
      }
    }

    document.addEventListener('mousedown', handleOutclick);

    return () => {
      document.removeEventListener('mousedown', handleOutclick);
    };
  }, []); // eslint-disable-line

  return ref;
};
