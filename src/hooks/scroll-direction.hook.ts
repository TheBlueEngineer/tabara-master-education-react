import { throttle } from '@utils/functions.utils';
import { useEffect, useState } from 'react';

type scrollDirectionType = 'up' | 'down' | 'idle' | null;

const useScrollInformation = (
  defaultScrollDirection: scrollDirectionType = null
) => {
  const [scrollDirection, setScrollDirection] = useState<scrollDirectionType>(
    defaultScrollDirection
  );
  const [previousScrollY, setPreviousScrollY] = useState<number>(0);
  const [currentScrollY, setCurrentScrollY] = useState<number>(0);
  const [isScrollOnTop, setIsScrollOnTop] = useState<boolean>(true);
  // Local variables for synchronization
  let localPreviousScrollY: number = 0;
  let localCurrentScrollY: number = 0;

  const updateScroll = () => {
    localCurrentScrollY = window.scrollY;
    setCurrentScrollY(localCurrentScrollY);

    if (localCurrentScrollY == 0) {
      setIsScrollOnTop(true);
    } else setIsScrollOnTop(false);

    if (localCurrentScrollY < localPreviousScrollY) {
      setScrollDirection('up');
    } else if (localCurrentScrollY === localPreviousScrollY) {
      setScrollDirection('idle');
    } else if (localCurrentScrollY > localPreviousScrollY) {
      setScrollDirection('down');
    }

    setTimeout(() => {
      localPreviousScrollY = localCurrentScrollY;
      setPreviousScrollY(localPreviousScrollY);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(updateScroll, 4), {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', throttle(updateScroll, 4));
    };
  }, []);

  return { scrollDirection, previousScrollY, currentScrollY, isScrollOnTop };
};

export default useScrollInformation;
