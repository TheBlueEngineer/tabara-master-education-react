import { FC, ChangeEvent } from 'react';
import * as SC from './currency-selector.styles';
import { useExchangeRates } from '@context/exchange-rates.context';
import { currenciesList } from '@consts/currency';

const CurrencySelector: FC = () => {
  const { exchangeRates, setCurrentRONmultiplier, handleSetCurrentCurrency } =
    useExchangeRates();

  const handleCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    if (!exchangeRates) return;
    const { value } = event.target;
    handleSetCurrentCurrency(value);
    setCurrentRONmultiplier(exchangeRates[value]);
  };

  return (
    <SC.Dropdown onChange={handleCurrencyChange} defaultValue="RON">
      {exchangeRates &&
        currenciesList.map((currency) => (
          <SC.Option key={currency.id} value={currency.name}>
            {currency.name}
          </SC.Option>
        ))}
    </SC.Dropdown>
  );
};

export default CurrencySelector;
