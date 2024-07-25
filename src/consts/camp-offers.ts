import branCastle from 'assets/images/home/campoffer1.jpg';

type CampOfferDataType = {
  id: number;
  code: string;
  bgImageUrl: string;
  priceInRON: number;
  location: string;
  startDate: Date;
  endDate: Date;
  durationDays: number;
  visibilityStartingDate: Date;
  visibilityEndingDate: Date;
  enrollingDeadlineDate: Date;
};

export const campOffersData: CampOfferDataType[] = [
  {
    id: 1,
    code: 'VAC_CASTEL_BRAN_1',
    bgImageUrl: branCastle,
    priceInRON: 42.99,
    location: 'Brasov, Romania',
    visibilityStartingDate: new Date(2024, 6, 10),
    visibilityEndingDate: new Date(2024, 6, 28),
    startDate: new Date(2024, 6, 14),
    endDate: new Date(2024, 6, 24),
    enrollingDeadlineDate: new Date(2024, 6, 13, 23, 59),
    durationDays: 10,
  },
  {
    id: 2,
    code: 'VAC_CASTEL_BRAN_2',
    bgImageUrl: branCastle,
    priceInRON: 62.99,
    location: 'Brasov, Romania',
    visibilityStartingDate: new Date(2024, 6, 10),
    visibilityEndingDate: new Date(2024, 6, 28),
    startDate: new Date(2024, 6, 14),
    endDate: new Date(2024, 6, 24),
    enrollingDeadlineDate: new Date(2024, 6, 13, 23, 59),
    durationDays: 10,
  },
  {
    id: 3,
    code: 'VAC_CASTEL_BRAN_3',
    bgImageUrl: branCastle,
    priceInRON: 82.99,
    location: 'Brasov, Romania',
    visibilityStartingDate: new Date(2024, 6, 10),
    visibilityEndingDate: new Date(2024, 6, 28),
    startDate: new Date(2024, 6, 14),
    endDate: new Date(2024, 6, 24),
    enrollingDeadlineDate: new Date(2024, 6, 13, 23, 59),
    durationDays: 10,
  },
];
