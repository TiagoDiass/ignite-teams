import { Button, Header, Highlight, TextField } from '@components/index';

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

        <TextField placeholder='Nome da turma' />

        <Button style={{ marginTop: 16 }} text='Criar' />
      </S.Content>
    </S.Wrapper>
  );
}
