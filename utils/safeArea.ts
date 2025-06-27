/**
 * ==============================
 * SAFE AREA UTILITIES
 * ==============================
 * Utilities for handling safe area insets across different devices
 */

import { Platform, StatusBar } from 'react-native';

export const SAFE_AREA_CONFIG = {
  // Status bar heights for different platforms
  statusBar: {
    ios: 44, // iPhone with notch
    android: StatusBar.currentHeight || 24,
  },

  // Bottom safe area for home indicator
  bottomSafeArea: {
    ios: 34, // iPhone with home indicator
    android: 0,
  },

  // Padding for content
  contentPadding: {
    top: Platform.OS === 'ios' ? 8 : 4,
    bottom: Platform.OS === 'ios' ? 8 : 4,
    horizontal: 16,
  },
};

export const getSafeAreaStyle = () => {
  return {
    paddingTop: SAFE_AREA_CONFIG.statusBar[Platform.OS as keyof typeof SAFE_AREA_CONFIG.statusBar],
    paddingBottom: SAFE_AREA_CONFIG.bottomSafeArea[Platform.OS as keyof typeof SAFE_AREA_CONFIG.bottomSafeArea],
  };
};
