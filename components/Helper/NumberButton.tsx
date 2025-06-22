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
      className="w-20 h-16 bg-gray-800 rounded-xl items-center justify-center active:bg-gray-700 border border-gray-600"
      onPress={() => onPress(number)}
    >
      <Text className="text-white text-xl font-semibold">{number}</Text>
    </TouchableOpacity>
  );
}
