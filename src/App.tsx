import { I18nextProvider } from 'react-i18next';
import './App.css';
import { GlobalStyle } from './global.styles';
import RoutesTree from './routes/routes-tree.component';
import i18n from './utils/i18n';
import { ThemeContextProvider } from './context/theme.context';
import { ModalProvider } from './context/modal.context';

const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <ThemeContextProvider>
          <ModalProvider>
            <GlobalStyle />
            <RoutesTree />
          </ModalProvider>
        </ThemeContextProvider>
      </I18nextProvider>
    </>
  );
};

export default App;
