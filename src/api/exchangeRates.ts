import axios from 'axios';

const API_KEY = import.meta.env.VITE_EXCHANGE_RATES_API_KEY;
const BASE_URL = 'https://v6.exchangerate-api.com/v6';
const CACHE_KEY = 'exchangeRates';
const CACHE_EXPIRATION_TIME = 24 * 60 * 60 * 1000; //24h = 24 * 60min * 60s * 1000ms

export type ExchangeRatesType = {
  [key: string]: number;
};

const saveToLocalStorage = (data: ExchangeRatesType, timestamp: number) => {
  localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp }));
};

const getFromLocalStorage = (): {
  data: ExchangeRatesType;
  timestamp: number;
} | null => {
  const item = localStorage.getItem(CACHE_KEY);
  if (item) {
    const parsed = JSON.parse(item);
    const now = Date.now();

    if (now - parsed.timestamp < CACHE_EXPIRATION_TIME) {
      return parsed;
    }
  }
  return null;
};

export const fetchExchangeRates = async (
  baseCurrency: string
): Promise<ExchangeRatesType> => {
  const cached = getFromLocalStorage();
  if (cached) {
    console.log('Retrieved cached data regarding exchange rates.');
    return cached.data;
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/${API_KEY}/latest/${baseCurrency.toUpperCase()}`
    );
    const rates = response.data.conversion_rates;
    saveToLocalStorage(rates, Date.now());
    return rates;
  } catch (error) {
    console.error('Error fetching exchange rates: ', error);
    throw error;
  }
};
