import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${(p) => p.theme.COLORS.GRAY_600};
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 36px;
  margin: auto 0;
`;
