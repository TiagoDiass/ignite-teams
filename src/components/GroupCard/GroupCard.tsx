import * as S from './GroupCard.styles';

type GroupCardProps = {
  title: string;
  onPress: () => void;
};

export function GroupCard({ title, onPress }: GroupCardProps) {
  return (
    <S.Wrapper onPress={onPress}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}
