export type CurrencyType = {
  id: number;
  name: string;
  placement: 'before' | 'after';
  symbol: string;
  isDefault?: boolean;
};

export const currenciesList: CurrencyType[] = [
  {
    id: 1,
    name: 'RON',
    placement: 'after',
    symbol: 'RON',
    isDefault: true,
  },
  {
    id: 2,
    name: 'USD',
    placement: 'before',
    symbol: '$',
  },
  {
    id: 3,
    name: 'EUR',
    placement: 'before',
    symbol: '€',
  },
];
