/**
 * ==============================
 * NUMBER BUTTON COMPONENT
 * ==============================
 * Reusable number button component for PIN entry and amount input
 */

import { Text, TouchableOpacity } from 'react-native';

interface NumberButtonProps {
  number: string;
  onPress: (num: string) => void;
}

export function NumberButton({ number, onPress }: NumberButtonProps) {
  return (
    <TouchableOpacity
      className="w-20 h-16 bg-white rounded-xl items-center justify-center active:bg-gray-50 border border-gray-200 shadow-sm"
      onPress={() => onPress(number)}
    >
      <Text className="text-gray-900 text-xl font-semibold">{number}</Text>
    </TouchableOpacity>
  );
}
