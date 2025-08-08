import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignUpScreen from './src/screens/SignUpScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SignUpScreen />
    </SafeAreaProvider>
  );
}
