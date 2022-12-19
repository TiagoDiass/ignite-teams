import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: ${(p) => p.theme.COLORS.GREEN_500};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #f9f9f9;
  font-size: 48px;
`;
