import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app/routes';
import { ThemeProvider } from './shared/theme/providers/ThemeProvider';
import { I18nProvider } from './app/providers/i18n/I18nProvider';
import { ResizableLayout } from './shared/ui/resizable-layout';
import Sidebar from './widgets/Sidebar/ui/Sidebar';
import { useAuth } from './processes/auth/model/useSession';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <I18nProvider>
          <AppContent />
        </I18nProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

function AppContent() {
  const { isAuthenticated, isLoading } = useAuth();

  // Loading holatida
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {isAuthenticated ? (
        <ResizableLayout
          initial={280}
          min={220}
          max={400}
          storageKey="market-sidebar-width"
        >
          <Sidebar />
          <AppRoutes />
        </ResizableLayout>
      ) : (
        <AppRoutes />
      )}
    </>
  );
}

export default App;
