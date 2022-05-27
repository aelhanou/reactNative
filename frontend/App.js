import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider } from "react-native-rapi-ui";
import { Provider } from "react-redux";
import { store } from "./src/store"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";


export default function App() {
  return (
    <Provider store={store} >
      <SafeAreaProvider>
        <ThemeProvider>
          <StatusBar animated={true}
            backgroundColor="white" />
          <AppNavigator />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
