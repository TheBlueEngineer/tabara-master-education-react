import { throttle } from '@utils/functions.utils';
import useToggle, { useToggleType } from '@hooks/toggle.hooks';
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type scrollDirectionType = 'up' | 'down' | 'idle' | null;

type NavigationInformationProviderProps = {
  children: ReactNode;
};

type NavigationInformationContextProps = {
  scrollDirection: scrollDirectionType;
  previousScrollY: number;
  currentScrollY: number;
  isScrollOnTop: boolean;
  upperbarToggler: useToggleType;
  navbarStyleToggler: useToggleType;
  navbarToggler: useToggleType;
};

const NavigationInformationContext =
  createContext<NavigationInformationContextProps | null>(null);

export const NavigationInformationProvider: FC<
  NavigationInformationProviderProps
> = ({ children }) => {
  const [scrollDirection, setScrollDirection] =
    useState<scrollDirectionType>('up');
  const [previousScrollY, setPreviousScrollY] = useState<number>(0);
  const [currentScrollY, setCurrentScrollY] = useState<number>(0);
  const [isScrollOnTop, setIsScrollOnTop] = useState<boolean>(true);
  const upperbarToggler = useToggle();
  const navbarStyleToggler = useToggle();
  const navbarToggler = useToggle();

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
    if (scrollDirection === 'up') {
      upperbarToggler.setToggle(true);
    }
    if (scrollDirection === 'down') {
      upperbarToggler.setToggle(false);
    }
  }, [scrollDirection, upperbarToggler]);

  useEffect(() => {
    navbarStyleToggler.setToggle(isScrollOnTop ? true : false);
  }, [isScrollOnTop, navbarStyleToggler]);

  useEffect(() => {
    window.addEventListener('scroll', throttle(updateScroll, 4), {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', throttle(updateScroll, 4));
    };
  }, []);

  const values = {
    scrollDirection,
    previousScrollY,
    currentScrollY,
    isScrollOnTop,
    navbarStyleToggler,
    upperbarToggler,
    navbarToggler,
  };

  return (
    <NavigationInformationContext.Provider value={values}>
      {children}
    </NavigationInformationContext.Provider>
  );
};

export const useNavigationInformation = () => {
  const context = useContext(NavigationInformationContext);
  if (!context) {
    throw new Error(
      'useNavigation must be used inside an NavigationInformationProvider component.'
    );
  }
  return context;
};
