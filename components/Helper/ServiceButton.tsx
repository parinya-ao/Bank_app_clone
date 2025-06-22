/**
 * ==============================
 * SERVICE BUTTON COMPONENT
 * ==============================
 * Reusable service button component for various banking services
 */

import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

interface ServiceButtonProps {
  icon: string;
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

export function ServiceButton({
  icon,
  label,
  onPress,
  disabled = false
}: ServiceButtonProps) {
  return (
    <TouchableOpacity
      className={`items-center w-20 ${ disabled ? 'opacity-50' : 'active:opacity-80' }`}
      onPress={onPress}
      disabled={disabled}
    >
      <View className="w-16 h-16 border border-gray-500 rounded-full items-center justify-center mb-2 bg-gray-800/50">
        <Ionicons name={icon as any} size={24} color="white" />
      </View>
      <Text className="text-white text-xs text-center leading-3 font-medium">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
