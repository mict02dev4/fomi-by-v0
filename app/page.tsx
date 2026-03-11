'use client'

import { useState } from 'react'
import { HomeScreen } from '@/components/screens/home-screen'
import { MalwareEntryScreen } from '@/components/screens/malware-entry-screen'
import { MalwareScanningScreen } from '@/components/screens/malware-scanning-screen'
import { MalwareSafeScreen } from '@/components/screens/malware-safe-screen'
import { MalwareDangerScreen } from '@/components/screens/malware-danger-screen'
import { PhishingDashboardScreen } from '@/components/screens/phishing-dashboard-screen'
import { RiskWarningScreen } from '@/components/screens/risk-warning-screen'
import { DocumentHubScreen } from '@/components/screens/document-hub-screen'
import { InfoScreen } from '@/components/screens/info-screen'

type Screen =
  | 'home'
  | 'malware-entry'
  | 'malware-scanning'
  | 'malware-safe'
  | 'malware-danger'
  | 'phishing-dashboard'
  | 'risk-warning'
  | 'document-hub'
  | 'info'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home')
  const [previousScreen, setPreviousScreen] = useState<Screen>('home')

  const navigateTo = (screen: Screen) => {
    setPreviousScreen(currentScreen)
    setCurrentScreen(screen)
  }

  const goBack = () => {
    setCurrentScreen(previousScreen)
  }

  return (
    <div className="min-h-screen">
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
  )
}
