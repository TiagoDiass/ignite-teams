import styled, { css } from 'styled-components/native';

export const LoadingSpinner = styled.ActivityIndicator.attrs((p) => ({
  color: p.theme.COLORS.GREEN_700,
  size: 'large',
}))`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.COLORS.GRAY_600};
  `}
`;
