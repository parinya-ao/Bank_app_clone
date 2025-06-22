/**
 * ==============================
 * SERVICE CARD COMPONENT
 * ==============================
 * Reusable service card component for displaying promotional services and features
 */

import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  icon: string;
  iconColor: string;
  onPress?: () => void;
}

export function ServiceCard({
  title,
  subtitle,
  icon,
  iconColor,
  onPress
}: ServiceCardProps) {
  const CardWrapper = onPress ? TouchableOpacity : View;

  return (
    <CardWrapper
      className={`bg-gray-800 rounded-xl p-4 flex-1 mr-2 ${ onPress ? 'active:bg-gray-700' : '' }`}
      onPress={onPress}
    >
      <View className="flex-row items-center mb-2">
        <View
          className="w-8 h-8 rounded-full items-center justify-center mr-2"
          style={{ backgroundColor: iconColor }}
        >
          <Ionicons name={icon as any} size={16} color="white" />
        </View>
        <Text className="text-white font-semibold text-sm">{title}</Text>
      </View>
      <Text className="text-gray-400 text-xs leading-4">{subtitle}</Text>
    </CardWrapper>
  );
}
