import { UsersThree } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${(p) => p.theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 96px;
`;

export const PeopleIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 64,
  color: theme.COLORS.GREEN_500,
}))`
  align-self: center;
`;
