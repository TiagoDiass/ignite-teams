import logoImg from '@assets/logo.png';
import * as S from './Header.styles';

type HeaderProps = {
  showNavigateBackButton?: boolean;
};

export function Header({ showNavigateBackButton = false }: HeaderProps) {
  return (
    <S.Wrapper>
      {showNavigateBackButton && (
        <S.NavigateBackButton>
          <S.BackIcon />
        </S.NavigateBackButton>
      )}

      <S.Logo source={logoImg} />
    </S.Wrapper>
  );
}
