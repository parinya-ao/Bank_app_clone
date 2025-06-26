/**
 * ==============================
 * KASIKORN BANK APP - CONSTANTS
 * ==============================
 * This file contains all static data, configuration, and constants used throughout the app.
 * Centralized data management for easy maintenance and updates.
 */

import { Account, NavigationTab, ServiceCardConfig, TransferOption, TransferRecipient } from '../types';

// ========== APP THEME COLORS ==========
export const COLORS = {
  // Primary colors matching K+ branding
  primary: {
    green: '#10b981',    // Main K+ green
    darkGreen: '#059669', // Darker green for active states
    lightGreen: '#34d399', // Lighter green for accents
  },

  // Background colors
  background: {
    primary: '#334155',   // Main dark background (slate-700)
    secondary: '#1f2937', // Card backgrounds (gray-800)
    tertiary: '#374151',  // Secondary card backgrounds (gray-700)
  },

  // Text colors
  text: {
    primary: '#ffffff',   // Main white text
    secondary: '#9ca3af', // Gray text (gray-400)
    muted: '#6b7280',     // Muted gray text (gray-500)
  },

  // Status colors
  status: {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  }
} as const;

// ========== MOCK USER ACCOUNTS ==========
export const USER_ACCOUNTS: Account[] = [
  {
    id: 'acc_001',
    title: 'บัญชีออมทรัพย์',
    accountNumber: 'xxx-x-x8888-x',
    balance: 8888888.00,
    type: 'savings',
    isDefault: true,
  },
  {
    id: 'acc_002',
    title: 'บัญชีกระแสรายวัน',
    accountNumber: 'xxx-x-x9999-x',
    balance: 1234567.89,
    type: 'current',
  },
] as const;

// ========== RECENT TRANSFER RECIPIENTS ==========
export const RECENT_RECIPIENTS: TransferRecipient[] = [
  {
    id: 'rec_001',
    name: 'คุณสมชาย ใจดี',
    accountNumber: 'xxx-x-xx123-x',
    bankName: 'กสิกรไทย',
    bankCode: 'KBANK',
  },
  {
    id: 'rec_002',
    name: 'นางสาวสุดา รักงาน',
    accountNumber: 'xxx-x-xx456-x',
    bankName: 'กรุงเทพ',
    bankCode: 'BBL',
  },
  {
    id: 'rec_003',
    name: 'นายวิทย์ ชาญการ',
    accountNumber: 'xxx-x-xx789-x',
    bankName: 'ไทยพาณิชย์',
    bankCode: 'SCB',
  },
  {
    id: 'rec_004',
    name: 'คุณมาลี อ่อนหวาน',
    accountNumber: 'xxx-x-xx321-x',
    bankName: 'กสิกรไทย',
    bankCode: 'KBANK',
  },
  {
    id: 'rec_005',
    name: 'นายธีรพงษ์ มั่นคง',
    accountNumber: 'xxx-x-xx654-x',
    bankName: 'กรุงศรีอยุธยา',
    bankCode: 'BAY',
  },
  {
    id: 'rec_006',
    name: 'นางพิมพ์ใจ เยียวยา',
    accountNumber: 'xxx-x-xx987-x',
    bankName: 'ธนาคารออมสิน',
    bankCode: 'GSB',
  },
] as const;

// ========== TRANSFER OPTIONS ==========
export const TRANSFER_OPTIONS: TransferOption[] = [
  {
    id: 'internal',
    title: 'โอนเงินในกสิกร',
    subtitle: 'โอนเงินภายในธนาคารกสิกรไทย ฟรีค่าธรรมเนียม',
    icon: 'business-outline',
    type: 'internal',
  },
  {
    id: 'external',
    title: 'โอนเงินต่างธนาคาร',
    subtitle: 'โอนเงินไปธนาคารอื่นๆ ทั่วประเทศ',
    icon: 'business-outline',
    type: 'external',
  },
  {
    id: 'promptpay',
    title: 'PromptPay',
    subtitle: 'โอนเงินผ่านเบอร์โทร หรือ เลขบัตรประชาชน',
    icon: 'phone-portrait-outline',
    type: 'promptpay',
  },
  {
    id: 'qr',
    title: 'QR Code',
    subtitle: 'สแกน QR Code เพื่อโอนเงิน รวดเร็วปลอดภัย',
    icon: 'qr-code-outline',
    type: 'qr',
  },
] as const;

// ========== BOTTOM NAVIGATION TABS ==========
export const NAVIGATION_TABS: NavigationTab[] = [
  {
    id: 'home',
    icon: 'home',
    label: 'หน้าแรก',
    screenType: 'home',
  },
  {
    id: 'market',
    icon: 'storefront-outline',
    label: 'K+ market',
    screenType: 'home', // Will be implemented later
  },
  {
    id: 'transaction',
    icon: 'B', // Special text icon
    label: 'ธุรกรรม',
    screenType: 'account',
    isSpecial: true,
  },
  {
    id: 'scan',
    icon: 'qr-code-outline',
    label: 'สแกนจ่าย/รับ',
    screenType: 'home', // Will be implemented later
  },
  {
    id: 'more',
    icon: 'ellipsis-horizontal',
    label: 'อื่นๆ',
    screenType: 'home', // Will be implemented later
  },
] as const;

// ========== SERVICE CARDS CONFIGURATION ==========
export const SERVICE_CARDS: ServiceCardConfig[] = [
  {
    title: 'K Point',
    subtitle: 'รับ แลก โอน โดนทุกสไตล์',
    icon: 'flash',
    iconColor: COLORS.primary.green,
  },
  {
    title: 'บัตรสมาชิก',
    subtitle: 'เช็คคะแนนง่าย สะสมคะแนนได้',
    icon: 'card',
    iconColor: '#06b6d4',
  },
  {
    title: 'บริการพิเศษ',
    subtitle: 'บริการครบครัน ใน K PLUS',
    icon: 'apps',
    iconColor: '#8b5cf6',
  },
] as const;

// ========== QUICK SERVICES CONFIGURATION ==========
export const QUICK_SERVICES = {
  // Main services shown on home screen
  main: [
    { icon: 'arrow-forward-outline', label: 'โอนเงิน' },
    { icon: 'arrow-down-outline', label: 'เติมเงิน' },
    { icon: 'stats-chart-outline', label: 'จ่ายบิล' },
    { icon: 'wallet-outline', label: 'ถอนเงิน' },
  ],

  // Account screen services - row 1
  accountRow1: [
    { icon: 'arrow-forward-outline', label: 'โอนเงิน' },
    { icon: 'arrow-down-outline', label: 'เติมเงิน' },
    { icon: 'stats-chart-outline', label: 'จ่ายบิล' },
    { icon: 'wallet-outline', label: 'ถอนเงิน' },
  ],

  // Account screen services - row 2
  accountRow2: [
    { icon: 'document-text-outline', label: 'Statement' },
    { icon: 'search-outline', label: 'สืบเสาะ' },
    { icon: 'trending-up-outline', label: 'ลงทุน' },
    { icon: 'card-outline', label: 'บัตรเดบิต' },
  ],

  // Other services
  others: [
    { icon: 'phone-portrait-outline', label: 'PromptPay' },
    { icon: 'card-outline', label: 'บัตรเครดิต' },
    { icon: 'shield-outline', label: 'ประกัน' },
    { icon: 'help-circle-outline', label: 'ช่วยเหลือ' },
  ],
} as const;

// ========== APP CONFIGURATION ==========
export const APP_CONFIG = {
  user: {
    profileImage: 'https://via.placeholder.com/40x40/059669/ffffff?text=K',
    name: 'ผู้ใช้ K+',
  },
  app: {
    name: 'K+ Bank',
    version: '1.0.0',
  },
} as const;
