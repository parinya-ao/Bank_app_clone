/**
 * ==============================
 * TOAST NOTIFICATION COMPONENT
 * ==============================
 * Beautiful toast notification component for K-Bank app
 * Supports success and error notifications with smooth animations
 */

import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';

interface ToastProps {
  visible: boolean;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
  onHide: () => void;
}

export function Toast({ visible, type, title, message, onHide }: ToastProps) {
  const slideAnim = useRef(new Animated.Value(-100)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Show animation
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start();

      // Auto hide after 4 seconds
      const timer = setTimeout(() => {
        hideToast();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [visible, slideAnim, opacityAnim]);

  const hideToast = useCallback(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onHide();
      // Reset animation values
      slideAnim.setValue(-100);
      opacityAnim.setValue(0);
    });
  }, [slideAnim, opacityAnim, onHide]);

  if (!visible) return null;

  const getToastStyle = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-green-500',
          borderColor: 'border-green-400',
          iconName: 'checkmark-circle' as const,
          iconColor: '#10b981'
        };
      case 'error':
        return {
          bgColor: 'bg-red-500',
          borderColor: 'border-red-400',
          iconName: 'close-circle' as const,
          iconColor: '#ef4444'
        };
      case 'info':
        return {
          bgColor: 'bg-blue-500',
          borderColor: 'border-blue-400',
          iconName: 'information-circle' as const,
          iconColor: '#3b82f6'
        };
      default:
        return {
          bgColor: 'bg-gray-500',
          borderColor: 'border-gray-400',
          iconName: 'information-circle' as const,
          iconColor: '#6b7280'
        };
    }
  };

  const { bgColor, borderColor, iconName } = getToastStyle();

  return (
    <View className="absolute top-0 left-0 right-0 z-50 px-4 pt-16">
      <Animated.View
        style={{
          transform: [{ translateY: slideAnim }],
          opacity: opacityAnim,
        }}
        className={`${ bgColor } rounded-2xl p-4 shadow-2xl border-2 ${ borderColor } mx-2`}
      >
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
          <View className="ml-2">
            <Ionicons
              name="close"
              size={24}
              color="white"
              onPress={hideToast}
            />
          </View>
        </View>

        {/* Progress bar */}
        <View className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
          <Animated.View
            className="h-full bg-white rounded-full"
            style={{
              width: '100%',
              transform: [{
                scaleX: opacityAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                })
              }]
            }}
          />
        </View>

        {/* Decorative elements */}
        <View className="absolute -top-1 -right-1 w-6 h-6 bg-white/10 rounded-full" />
        <View className="absolute -bottom-1 -left-1 w-4 h-4 bg-white/10 rounded-full" />
      </Animated.View>
    </View>
  );
}
