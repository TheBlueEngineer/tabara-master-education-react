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
  isNavbarStyleEnabled: boolean;
  upperbarToggler: useToggleType;
  navbarStyleToggler: useToggleType;
};

const NavigationInformationContext =
  createContext<NavigationInformationContextProps | null>(null);

export const NavigationInformationProvider: FC<
  NavigationInformationProviderProps
> = ({ children }) => {
  const [scrollDirection, setScrollDirection] =
    useState<scrollDirectionType>(null);
  const [previousScrollY, setPreviousScrollY] = useState<number>(0);
  const [currentScrollY, setCurrentScrollY] = useState<number>(0);
  const [isScrollOnTop, setIsScrollOnTop] = useState<boolean>(true);
  const [isNavbarStyleEnabled, setIsNavbarStyleEnabled] =
    useState<boolean>(true);
  const upperbarToggler = useToggle();
  const navbarStyleToggler = useToggle();

  // Local variables for synchronization
  let localPreviousScrollY: number = 0;
  let localCurrentScrollY: number = 0;

  const handleIsNavbarStyleDisabled = (bool: boolean) =>
    setIsNavbarStyleEnabled(bool);

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
    upperbarToggler.setToggle(scrollDirection === 'up' ? true : false);
  }, [scrollDirection, upperbarToggler]);

  useEffect(() => {
    if (isNavbarStyleEnabled) {
      navbarStyleToggler.setToggle(isScrollOnTop ? true : false);
    }
  }, [isScrollOnTop, navbarStyleToggler, isNavbarStyleEnabled]);

  useEffect(() => {
    window.addEventListener('scroll', throttle(updateScroll, 4), {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', throttle(updateScroll, 4));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values = {
    scrollDirection,
    previousScrollY,
    currentScrollY,
    isScrollOnTop,
    navbarStyleToggler,
    upperbarToggler,
    isNavbarStyleEnabled,
    handleIsNavbarStyleDisabled,
  };

  return (
    <NavigationInformationContext.Provider value={values}>
      {children}
    </NavigationInformationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNavigationInformation = () => {
  const context = useContext(NavigationInformationContext);
  if (!context) {
    throw new Error(
      'useNavigation must be used inside an NavigationInformationProvider component.'
    );
  }
  return context;
};
