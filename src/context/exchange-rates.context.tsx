import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ExchangeRatesType, fetchExchangeRates } from '@api/exchangeRates';
import { currenciesList, CurrencyType } from '@consts/currency';

type ExchangeRatesProviderProps = {
  baseCurrency: string;
  children: ReactNode;
};

type ExchangeRatesContextProps = {
  exchangeRates: ExchangeRatesType | null;
  isLoading: boolean;
  error: string | null;
  currentRONmultiplier: number;
  setCurrentRONmultiplier: (value: number) => void;
  currentCurrency: CurrencyType | null;
  handleSetCurrentCurrency: (value: string) => void;
};

const ExchangeRateContext = createContext<
  ExchangeRatesContextProps | undefined
>(undefined);

export const ExchangeRateProvider: FC<ExchangeRatesProviderProps> = ({
  baseCurrency = 'RON',
  children,
}) => {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRatesType | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentRONmultiplier, setCurrentRONmultiplier] = useState<number>(1);
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyType | null>(
    null
  );

  const handleSetCurrentCurrency = (currencyName: string) => {
    const findCurrency = currenciesList.find(
      (currency) => currency.name === currencyName
    );
    if (!findCurrency) {
      console.log(
        'handleSetCurrentCurrency: Couldnt find a currency with specified name.'
      );
      return;
    }
    setCurrentCurrency(findCurrency);
  };

  useEffect(() => {
    if (!currentCurrency) {
      const defaultCurrency = currenciesList.find(
        (currency) => currency.isDefault === true
      );
      if (!defaultCurrency) return;
      setCurrentCurrency(defaultCurrency);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getExchangeRates = async () => {
      setIsLoading(true);
      try {
        const exchangeRates = await fetchExchangeRates(baseCurrency);
        setExchangeRates(exchangeRates);
      } catch (error) {
        setError('Failed to fetch exchange rates.');
      } finally {
        setIsLoading(false);
      }
    };

    getExchangeRates();
  }, [baseCurrency]);

  const values = {
    exchangeRates,
    isLoading,
    error,
    currentRONmultiplier,
    setCurrentRONmultiplier,
    currentCurrency,
    handleSetCurrentCurrency,
  };

  return (
    <ExchangeRateContext.Provider value={values}>
      {children}
    </ExchangeRateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useExchangeRates = () => {
  const context = useContext(ExchangeRateContext);
  if (context === undefined) {
    throw new Error(
      'useExchangeRates must be used inside an ExchangeRateProvider component.'
    );
  }
  return context;
};
