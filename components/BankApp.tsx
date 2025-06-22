/**
 * ==============================
 * KASIKORN BANK APP - MAIN APPLICATION COMPONENT
 * ==============================
 * This is the main application component that handles navigation between different screens.
 * It manages the global state for screen navigation and renders the appropriate screen component.
 */

import { useState } from 'react';

// Import screen components
import { AccountScreen } from './Page/AccountScreen';
import { ConfirmTransferScreen } from './Page/ConfirmTransferScreen';
import { EnterAmountScreen } from './Page/EnterAmountScreen';
import { HomeScreen } from './Page/HomeScreen';
import { SelectAccountScreen } from './Page/SelectAccountScreen';
import { TransferScreen } from './Page/TransferScreen';

// Import types
import { ScreenType } from '../types';

/**
 * Main Banking Application Component
 * Handles navigation state and screen rendering
 */
export function BankApp() {
  // ========== STATE MANAGEMENT ==========
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');

  // ========== NAVIGATION HANDLER ==========
  const handleNavigation = (screen: ScreenType): void => {
    setCurrentScreen(screen);
  };

  // ========== SCREEN RENDERER ==========
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={handleNavigation} />;

      case 'account':
        return <AccountScreen onNavigate={handleNavigation} />;

      case 'transfer':
        return <TransferScreen onNavigate={handleNavigation} />;

      case 'selectAccount':
        return <SelectAccountScreen onNavigate={handleNavigation} />;

      case 'enterAmount':
        return <EnterAmountScreen onNavigate={handleNavigation} />;

      case 'confirmTransfer':
        return <ConfirmTransferScreen onNavigate={handleNavigation} />;

      default:
        return <HomeScreen onNavigate={handleNavigation} />;
    }
  };

  // ========== RENDER ==========
  return <>{renderCurrentScreen()}</>;
}
