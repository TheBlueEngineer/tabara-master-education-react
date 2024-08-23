import { I18nextProvider } from 'react-i18next';
import './App.css';
import { GlobalStyle } from './global.styles';
import RoutesTree from './routes/routes-tree.component';
import i18n from './utils/i18n';
import { ThemeContextProvider } from './context/theme.context';
import { ModalProvider } from './context/modal.context';
import { ExchangeRateProvider } from './context/exchange-rates.context';
import { CampOfferProvider } from '@context/camp-offer.context';
import { NavigationInformationProvider } from '@context/navigation-information.context';

const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <ThemeContextProvider>
          <ExchangeRateProvider baseCurrency="RON">
            <NavigationInformationProvider>
              <ModalProvider>
                <CampOfferProvider>
                  <GlobalStyle />
                  <RoutesTree />
                </CampOfferProvider>
              </ModalProvider>
            </NavigationInformationProvider>
          </ExchangeRateProvider>
        </ThemeContextProvider>
      </I18nextProvider>
    </>
  );
};

export default App;
