import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app/routes';
import { ThemeProvider } from './shared/theme/providers/ThemeProvider';
import { I18nProvider } from './app/providers/i18n/I18nProvider';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <I18nProvider>
          <AppRoutes />
        </I18nProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
