import { StatusBar } from 'expo-status-bar';
import { Groups } from '@screens/Groups/Groups';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
      <StatusBar style='auto' />
    </ThemeProvider>
  );
}
