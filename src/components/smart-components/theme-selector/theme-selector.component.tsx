import Button from '@components/shared-components/button/button.component';
import { useTheme } from 'src/context/theme.context';

const ThemeSelector = () => {
  const { toggleTheme } = useTheme();
  return <Button onClick={toggleTheme}>Theme</Button>;
};

export default ThemeSelector;
