import { useEffect, useState } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY) {
        setScrollDirection('down');
      }
      if (scrollY < lastScrollY) {
        setScrollDirection('up');
      }
      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return scrollDirection;
};

export default useScrollDirection;
