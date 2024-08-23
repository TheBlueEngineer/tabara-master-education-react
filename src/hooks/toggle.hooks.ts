import { useState } from 'react';

export type useToggleType = {
  isToggled: boolean;
  handleToggle: () => void;
  setToggle: (bool: boolean) => void;
};

const useToggle = (isOpen: boolean = false): useToggleType => {
  const [isToggled, setIsToggled] = useState<boolean>(isOpen);

  const handleToggle = () => setIsToggled(!isToggled);
  const setToggle = (bool: boolean) => setIsToggled(bool);
  return { isToggled, handleToggle, setToggle };
};

export default useToggle;
