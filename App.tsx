import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { Groups } from '@screens/Groups/Groups';
import { theme } from './src/theme';
import { LoadingSpinner } from '@components/index';
import { NewGroup } from '@screens/NewGroup/NewGroup';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' />
      {fontsLoaded ? <NewGroup /> : <LoadingSpinner />}
    </ThemeProvider>
  );
}
