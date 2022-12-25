import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: center;
  padding: 8px;
  margin-top: 48px;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const NavigateBackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))`
  color: #fff;
`;
