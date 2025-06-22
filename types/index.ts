/**
 * ==============================
 * KASIKORN BANK APP - TYPE DEFINITIONS
 * ==============================
 * This file contains all TypeScript interfaces and types used throughout the banking app
 * to ensure type safety and better code maintainability.
 */

// Navigation type for screen routing
export type ScreenType =
  | 'home'
  | 'account'
  | 'transfer'
  | 'selectAccount'
  | 'enterAmount'
  | 'confirmTransfer';

// Navigation props interface for screen components
export interface NavigationProps {
  onNavigate: (screen: ScreenType) => void;
}

// Account information interface
export interface Account {
  id: string;
  title: string;
  accountNumber: string;
  balance: number;
  type: 'savings' | 'current';
  isDefault?: boolean;
}

// Transfer recipient interface
export interface TransferRecipient {
  id: string;
  name: string;
  accountNumber: string;
  bankName: string;
  bankCode?: string;
}

// Service button configuration interface
export interface ServiceConfig {
  icon: string;
  label: string;
  action: () => void;
  isEnabled?: boolean;
}

// Service card configuration interface
export interface ServiceCardConfig {
  title: string;
  subtitle: string;
  icon: string;
  iconColor: string;
  action?: () => void;
}

// Transfer options interface
export interface TransferOption {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  type: 'internal' | 'external' | 'promptpay' | 'qr';
}

// Bottom navigation tab interface
export interface NavigationTab {
  id: string;
  icon: string;
  label: string;
  screenType: ScreenType;
  isSpecial?: boolean; // For the middle circular button
}
