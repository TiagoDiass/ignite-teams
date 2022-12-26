import { TextInput, TextInputProps } from 'react-native';
import styled, { css, useTheme } from 'styled-components/native';

const Wrapper = styled(TextInput)`
  ${({ theme }) => css`
    height: 56px;
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    border-radius: 6px;
    padding: 16px;
  `}
`;

export function TextField(props: TextInputProps) {
  const theme = useTheme();

  return <Wrapper {...props} placeholderTextColor={theme.COLORS.GRAY_300} />;
}
