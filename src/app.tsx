import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import * as storage from './utils/storage';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {AppNavigator, useNavigationPersistence} from './navigators';
import {useInitialRootStore} from './models';

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';
// Web linking configuration
const config = {
  screens: {
    Login: {
      path: '',
    },
  },
};

/**
 * This is the root component of our app.
 * @param {AppProps} props - The props for the `App` component.
 * @returns {JSX.Element} The rendered `App` component.
 */

function App() {
  const linking = {
    prefixes: [''],
    config,
  };

  // Initial Navigation Check
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  const {rehydrated} = useInitialRootStore(() => {
    // setTimeout(hideSplashScreen, 500);
  });

  if (!rehydrated || !isNavigationStateRestored) return null;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={{flex: 1}}>
        <AppNavigator
          linking={linking}
          initialState={initialNavigationState}
          onStateChange={onNavigationStateChange}
        />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
