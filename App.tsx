import {NativeBaseProvider, StatusBar} from 'native-base'
import { THEME } from './src/styles/theme'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { SingIn } from './src/screens/SingIn';
import { Home } from './src/screens/Home'
import { Register } from './src/screens/Register'
import { Loading } from './src/components/Loading'
import { Routes } from './src/routes/index'
import React from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}

