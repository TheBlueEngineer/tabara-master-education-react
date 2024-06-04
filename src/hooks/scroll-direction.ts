import { useEffect, useState } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(
    null
  );
  let previousScrollY: number = 0;
  let currentScrollY: number = 0;

  const throttle = (callbackFn: callbackFunction, limit: number) => {
    let wait = false;
    return () => {
      if (!wait) {
        callbackFn.call(null);
        wait = true;
        setTimeout(function () {
          wait = false;
        }, limit);
      }
    };
  };

  const updateScrollDirection = () => {
    currentScrollY = window.scrollY;

    currentScrollY > previousScrollY
      ? setScrollDirection('down')
      : setScrollDirection('up');

    console.log(
      'current scrolly',
      currentScrollY,
      ' last scrollY',
      previousScrollY
    );

    setTimeout(() => (previousScrollY = currentScrollY), 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(updateScrollDirection, 100), {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        'scroll',
        throttle(updateScrollDirection, 100)
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return scrollDirection;
};

export default useScrollDirection;
