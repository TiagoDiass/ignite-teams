import { UsersThree } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

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

export const GroupNameTextField = styled.TextInput`
  ${({ theme }) => css`
    height: 56px;
    padding: 16px;
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
    margin-bottom: 20px;
    border-radius: 6px;
  `}
`;
