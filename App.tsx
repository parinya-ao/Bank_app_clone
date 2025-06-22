import { StatusBar } from 'expo-status-bar';
import { BankApp } from './components/BankApp';

import './global.css';

export default function App() {
  return (
    <>
      <BankApp />
      <StatusBar style="light" />
    </>
  );
}
