import { FC } from 'react';
import * as SC from './price-tag.styles';
import { useExchangeRates } from '@context/exchange-rates.context';

type PriceTagProps = {
  value: number;
};

const PriceTag: FC<PriceTagProps> = ({ value }) => {
  const { currentCurrency, currentRONmultiplier } = useExchangeRates();

  const getDecimals = (value: number): string => {
    const str = value.toFixed(2);
    const decimalIndex = str.indexOf('.');
    const decimals =
      decimalIndex !== -1
        ? str.slice(decimalIndex + 1, decimalIndex + 3)
        : '00';

    return decimals;
  };

  const getInteger = (value: number): number => Math.floor(value);

  return (
    <SC.Price>
      {currentCurrency && currentCurrency.placement === 'before'
        ? currentCurrency.symbol
        : null}
      {getInteger(value * currentRONmultiplier)}
      <SC.CharmPricing>
        {getDecimals(value * currentRONmultiplier)}
      </SC.CharmPricing>
      {currentCurrency && currentCurrency.placement === 'after'
        ? ` ${currentCurrency.symbol}`
        : null}
    </SC.Price>
  );
};

export default PriceTag;
