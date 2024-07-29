import branCastle from 'assets/images/home/castelul-bran-1-1.webp';
import { IconType } from 'react-icons';
import {
  FaBus,
  FaCalendarCheck,
  FaClock,
  FaMapLocation,
  FaPeopleGroup,
} from 'react-icons/fa6';
import { MdPerson } from 'react-icons/md';

type DetailGrid = {
  icon: IconType;
  value: string | number | null;
};

export type CampOfferDataType = {
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
  detailsGrid?: { [key: string]: DetailGrid };
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
    detailsGrid: {
      days: {
        icon: FaClock,
        value: 10,
      },
      maxPeople: {
        icon: FaPeopleGroup,
        value: 100,
      },
      minAge: {
        icon: MdPerson,
        value: 7,
      },
      bookingInterval: {
        icon: FaCalendarCheck,
        value: null,
      },
      pickupSpot: {
        icon: FaMapLocation,
        value: null,
      },
      transportationType: {
        icon: FaBus,
        value: null,
      },
    },
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
