/**
 * ==============================
 * TOAST NOTIFICATION COMPONENT
 * ==============================
 * Simple toast notification component for K-Bank app
 * Supports success and error notifications without animations
 */

import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ToastProps {
  visible: boolean;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
  onHide: () => void;
}

export function Toast({ visible, type, title, message, onHide }: ToastProps) {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (visible) {
      // Auto hide after 2 seconds
      const timer = setTimeout(() => {
        onHide();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [visible, onHide]);

  if (!visible) return null;

  const getToastStyle = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-green-500',
          borderColor: 'border-green-400',
          iconName: 'checkmark-circle' as const,
        };
      case 'error':
        return {
          bgColor: 'bg-red-500',
          borderColor: 'border-red-400',
          iconName: 'close-circle' as const,
        };
      case 'info':
        return {
          bgColor: 'bg-blue-500',
          borderColor: 'border-blue-400',
          iconName: 'information-circle' as const,
        };
      default:
        return {
          bgColor: 'bg-gray-500',
          borderColor: 'border-gray-400',
          iconName: 'information-circle' as const,
        };
    }
  };

  const { bgColor, borderColor, iconName } = getToastStyle();

  return (
    <View
      className="absolute top-0 left-0 right-0 z-50 px-4"
      style={{ paddingTop: Math.max(insets.top, 8) + 8 }}
    >
      <View className={`${bgColor} rounded-2xl p-4 shadow-2xl border-2 ${borderColor} mx-2`}>
        <View className="flex-row items-start">
          {/* Icon */}
          <View className="mr-3 mt-1">
            <Ionicons name={iconName} size={28} color="white" />
          </View>

          {/* Content */}
          <View className="flex-1">
            <Text className="text-white font-bold text-lg mb-1">
              {title}
            </Text>
            <Text className="text-white/90 text-sm leading-5">
              {message}
            </Text>
          </View>

          {/* Close button */}
          <TouchableOpacity className="ml-2" onPress={onHide}>
            <Ionicons name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Decorative elements */}
        <View className="absolute -top-1 -right-1 w-6 h-6 bg-white/10 rounded-full" />
        <View className="absolute -bottom-1 -left-1 w-4 h-4 bg-white/10 rounded-full" />
      </View>
    </View>
  );
}
