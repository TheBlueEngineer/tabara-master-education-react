import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { CampOfferDataType, campOffersData } from '../consts/camp-offers';
import useCounter, { CounterType } from '@hooks/counter.hook';

type CampOfferProviderProps = {
  children: ReactNode;
};

type CampOfferContextProps = {
  campOffer: CampOfferDataType | null;
  isLoading: boolean;
  childrenCounter: CounterType;
  handleSetCampOffer: (code: string) => void;
};

const CampOfferContext = createContext<CampOfferContextProps | null>(null);

export const CampOfferProvider: FC<CampOfferProviderProps> = ({ children }) => {
  const [campOffer, setCampOffer] = useState<CampOfferDataType | null>(null);
  const childrenCounter = useCounter(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSetCampOffer = (code: string) => {
    setIsLoading(true);
    const foundCampOffer = campOffersData.find(
      (campOffer) => campOffer.code === code
    );
    if (!foundCampOffer) {
      console.error('Could not find a camp offer in campOffersData array.');
    } else setCampOffer(foundCampOffer);
    setIsLoading(false);
  };

  const getCampOfferCode = () => {
    if (campOffer) return campOffer.code;
    else return null;
  };

  const values = {
    campOffer,
    isLoading,
    handleSetCampOffer,
    getCampOfferCode,
    childrenCounter,
  };

  return (
    <CampOfferContext.Provider value={values}>
      {children}
    </CampOfferContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCampOffer = () => {
  const context = useContext(CampOfferContext);
  if (!context) {
    throw new Error(
      'useCampOffer must be used inside an CampOfferProvider component.'
    );
  }
  return context;
};
