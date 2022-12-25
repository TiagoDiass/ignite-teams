import { TouchableOpacity } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';
import { ButtonTypes } from './Button';

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.COLORS.GREEN_700};
  `,

  danger: (theme: DefaultTheme) => css`
    background-color: ${theme.COLORS.RED_DARK};
  `,
};

type WrapperProps = {
  type: ButtonTypes;
};

export const Wrapper = styled(TouchableOpacity)<WrapperProps>`
  ${({ theme, type }) => css`
    flex: 1;
    min-height: 56px;
    max-height: 56px;

    border-radius: 6px;
    justify-content: center;
    align-items: center;

    ${wrapperModifiers[type](theme)}
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
