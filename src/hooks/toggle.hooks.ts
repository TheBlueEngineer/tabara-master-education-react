import { useState } from 'react';

const useToggle = (isOpen: boolean = false) => {
  const [isToggled, setIsToggled] = useState(isOpen);

  const handleToggle = () => setIsToggled(!isToggled);
  const setToggle = (bool: boolean) => setIsToggled(bool);

  return { isToggled, handleToggle, setToggle };
};

export default useToggle;
