import { Button, Header, Highlight } from '@components/index';
import { Text } from 'react-native';
import { theme } from '../../theme';
import * as S from './NewGroup.styles';

export function NewGroup() {
  return (
    <S.Wrapper>
      <Header showNavigateBackButton />

      <S.Content>
        <S.PeopleIcon />

        <Highlight
          title='Nova turma'
          subtitle='Crie uma turma para adicionar pessoas'
        />

        <S.GroupNameTextField
          placeholder='Nome da turma'
          placeholderTextColor={theme.COLORS.GRAY_300}
        />

        <Button text='Criar' />
      </S.Content>
    </S.Wrapper>
  );
}
