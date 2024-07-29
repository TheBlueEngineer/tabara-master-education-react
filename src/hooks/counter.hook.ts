import { ChangeEvent, useState } from 'react';

const useCounter = (
  initialValue: number = 0,
  lowerLimit: number = 0,
  upperLimit: number = 10000000
) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if (count < upperLimit) setCount(count + 1);
  };
  const decrement = () => {
    if (count > lowerLimit) setCount(count - 1);
  };

  const handleChangeCount = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };

  return { count, increment, decrement, handleChangeCount };
};

export default useCounter;
