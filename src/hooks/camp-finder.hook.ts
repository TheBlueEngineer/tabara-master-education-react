import { CampOfferDataType, campOffersData } from '@consts/camp-offers';

const useCampFinder = (code: string): CampOfferDataType | null => {
  const foundCampOffer = campOffersData.find(
    (campOffer) => campOffer.code === code
  );
  if (!foundCampOffer) return null;
  return foundCampOffer;
};

export default useCampFinder;
