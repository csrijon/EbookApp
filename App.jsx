import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import SignInScreen from './src/screens/SignInScreen';
import MainScreen from './src/screens/MainScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
// import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainScreen/>
{/* <SignInScreen/> */}
{/* <SignUpScreen/> */}
{/* <WelcomeScreen/> */}
    </SafeAreaProvider>
  );
}
