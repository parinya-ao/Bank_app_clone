/**
 * ==============================
 * TOAST HOOK
 * ==============================
 * Custom hook for managing toast notifications state
 */

import { useState } from 'react';

interface ToastState {
  visible: boolean;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

export function useToast() {
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    type: 'success',
    title: '',
    message: '',
  });

  const showSuccessToast = (title: string, message: string) => {
    setToast({
      visible: true,
      type: 'success',
      title,
      message,
    });
  };

  const showErrorToast = (title: string, message: string) => {
    setToast({
      visible: true,
      type: 'error',
      title,
      message,
    });
  };

  const showInfoToast = (title: string, message: string) => {
    setToast({
      visible: true,
      type: 'info',
      title,
      message,
    });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, visible: false }));
  };

  return {
    toast,
    showSuccessToast,
    showErrorToast,
    showInfoToast,
    hideToast,
  };
}
