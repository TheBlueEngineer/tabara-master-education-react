type CampOfferDataType = {
  id: number;
  code: string;
  bgImageUrl: string;
  priceInRON: number;
  startDate: Date;
  endDate: Date;
  durationDays?: number;
  visibilityStartingDate: Date;
  visibilityEndingDate: Date;
  enrollingDeadlineDate: Date;
};

export const CampOffersData: CampOfferDataType[] = [
  {
    id: 1,
    code: 'VAC_CASTEL_BRAN_1',
    bgImageUrl: '/src/assets/images/home/campoffer1.jpg',
    priceInRON: 42.99,
    visibilityStartingDate: new Date(2024, 6, 10),
    visibilityEndingDate: new Date(2024, 6, 28),
    startDate: new Date(2024, 6, 14),
    endDate: new Date(2024, 6, 24),
    enrollingDeadlineDate: new Date(2024, 6, 13, 23, 59),
    durationDays: 10,
  },
];
