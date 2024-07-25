import { useState } from 'react';

const useToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);

  return { isToggled, handleToggle };
};

export default useToggle;
