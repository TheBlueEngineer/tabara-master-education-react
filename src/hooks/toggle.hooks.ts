import { useState } from 'react';

const useToggle = (isOpen: boolean = false) => {
  const [isToggled, setIsToggled] = useState(isOpen);

  const handleToggle = () => setIsToggled(!isToggled);

  return { isToggled, handleToggle };
};

export default useToggle;
