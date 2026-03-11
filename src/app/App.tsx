import { useState } from 'react';
import { HomeScreen } from './components/home-screen';
import { MalwareEntryScreen } from './components/malware-entry-screen';
import { MalwareScanningScreen } from './components/malware-scanning-screen';
import { MalwareSafeScreen } from './components/malware-safe-screen';
import { MalwareDangerScreen } from './components/malware-danger-screen';
import { PhishingDashboardScreen } from './components/phishing-dashboard-screen';
import { RiskWarningScreen } from './components/risk-warning-screen';
import { DocumentHubScreen } from './components/document-hub-screen';
import { InfoScreen } from './components/info-screen';

type Screen =
  | 'home'
  | 'malware-entry'
  | 'malware-scanning'
  | 'malware-safe'
  | 'malware-danger'
  | 'phishing-dashboard'
  | 'risk-warning'
  | 'document-hub'
  | 'info';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [previousScreen, setPreviousScreen] = useState<Screen>('home');

  const navigateTo = (screen: Screen) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    setCurrentScreen(previousScreen);
  };

  return (
    <div className="size-full max-w-md mx-auto bg-background relative">
      {/* Mobile App Container */}
      <div className="relative h-full overflow-hidden">
        {currentScreen === 'home' && <HomeScreen onNavigate={navigateTo} />}

        {currentScreen === 'malware-entry' && (
          <MalwareEntryScreen onNavigate={navigateTo} onBack={goBack} />
        )}

        {currentScreen === 'malware-scanning' && (
          <MalwareScanningScreen onNavigate={navigateTo} />
        )}

        {currentScreen === 'malware-safe' && (
          <MalwareSafeScreen onNavigate={navigateTo} />
        )}

        {currentScreen === 'malware-danger' && (
          <MalwareDangerScreen onNavigate={navigateTo} />
        )}

        {currentScreen === 'phishing-dashboard' && (
          <PhishingDashboardScreen onNavigate={navigateTo} onBack={goBack} />
        )}

        {currentScreen === 'risk-warning' && (
          <RiskWarningScreen onBack={goBack} />
        )}

        {currentScreen === 'document-hub' && (
          <DocumentHubScreen onBack={goBack} />
        )}

        {currentScreen === 'info' && (
          <InfoScreen onBack={goBack} />
        )}
      </div>
    </div>
  );
}