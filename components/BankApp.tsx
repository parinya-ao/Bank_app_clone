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

// Import helper components
import { Toast } from './Helper/Toast';

// Import hooks
import { useToast } from '../hooks/useToast';

// Import types
import { ScreenType } from '../types';

/**
 * Main Banking Application Component
 * Handles navigation state and screen rendering
 */
export function BankApp() {
  // ========== STATE MANAGEMENT ==========
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const { toast, showSuccessToast, showErrorToast, showInfoToast, hideToast } = useToast();

  // ========== NAVIGATION HANDLER ==========
  const handleNavigation = (screen: ScreenType): void => {
    setCurrentScreen(screen);
  };

  // ========== SCREEN RENDERER ==========
  const renderCurrentScreen = () => {
    const screenProps = {
      onNavigate: handleNavigation,
      showSuccessToast,
      showErrorToast,
      showInfoToast
    };

    switch (currentScreen) {
      case 'home':
        return <HomeScreen {...screenProps} />;

      case 'account':
        return <AccountScreen {...screenProps} />;

      case 'transfer':
        return <TransferScreen {...screenProps} />;

      case 'selectAccount':
        return <SelectAccountScreen {...screenProps} />;

      case 'enterAmount':
        return <EnterAmountScreen {...screenProps} />;

      case 'confirmTransfer':
        return <ConfirmTransferScreen {...screenProps} />;

      default:
        return <HomeScreen {...screenProps} />;
    }
  };

  // ========== RENDER ==========
  return (
    <>
      {renderCurrentScreen()}
      <Toast
        visible={toast.visible}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        onHide={hideToast}
      />
    </>
  );
}
