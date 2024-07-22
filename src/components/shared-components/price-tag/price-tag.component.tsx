import { FC } from 'react';
import * as SC from './price-tag.styles';
import { useExchangeRates } from '@context/exchange-rates.context';

type PriceTagProps = {
  value: number;
};

const PriceTag: FC<PriceTagProps> = ({ value }) => {
  const { currentCurrency, currentRONmultiplier } = useExchangeRates();

  const formatValue = (value: number): number => {
    const formattedValue = Math.round(value) - 1;
    console.log(formattedValue);
    return formattedValue;
  };

  return (
    <SC.Price>
      {currentCurrency && currentCurrency.placement === 'before'
        ? currentCurrency.symbol
        : null}
      {formatValue(value * currentRONmultiplier)}
      <SC.CharmPricing>99</SC.CharmPricing>
      {currentCurrency && currentCurrency.placement === 'after'
        ? ` ${currentCurrency.symbol}`
        : null}
    </SC.Price>
  );
};

export default PriceTag;
