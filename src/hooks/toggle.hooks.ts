import { useState } from 'react';

export type useToggleType = {
  isToggled: boolean;
  isToggleEnabled: boolean;
  handleToggle: () => void;
  setToggle: (bool: boolean) => void;
  enableToggle: () => void;
  disableToggle: () => void;
};

const useToggle = (isOpen: boolean = false): useToggleType => {
  const [isToggled, setIsToggled] = useState<boolean>(isOpen);
  const [isToggleEnabled, setIsToggleEnabled] = useState<boolean>(true);

  const handleToggle = () => {
    if (isToggleEnabled) {
      setIsToggled(!isToggled);
    }
  };

  const setToggle = (bool: boolean) => {
    if (isToggleEnabled) {
      setIsToggled(bool);
    }
  };

  const enableToggle = () => setIsToggleEnabled(true);
  const disableToggle = () => setIsToggleEnabled(false);

  return {
    isToggled,
    isToggleEnabled,
    handleToggle,
    setToggle,
    enableToggle,
    disableToggle,
  };
};

export default useToggle;
