import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#715',
  },
});

export const Wrapper = styled.View`
  background-color: salmon;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 48px;
`;
