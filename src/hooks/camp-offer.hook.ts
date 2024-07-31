import { CampOfferDataType, campOffersData } from '@consts/camp-offers';
import { useEffect, useState } from 'react';

const useCampOffer = (code: string | undefined) => {
  const [campOffer, setCampOffer] = useState<CampOfferDataType | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCampOffer = () => {
      const foundCampOffer = campOffersData.find(
        (offer) => offer.code === code
      );
      if (!foundCampOffer) return;
      setLoading(false);
      setCampOffer(foundCampOffer);
    };
    fetchCampOffer();
  }, [code]);

  return { campOffer, loading };
};

export default useCampOffer;
