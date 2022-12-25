import { GroupCard, Header, Highlight } from '@components/index';

import * as S from './Groups.styles';

export function Groups() {
  return (
    <S.Wrapper>
      <Header />

      <Highlight title='Turmas' subtitle='Jogue com sua turma' />

      <GroupCard
        title='Galera do Ignite'
        onPress={() => console.log('teste')}
      />
      <GroupCard
        title='Galera do Discord'
        onPress={() => console.log('teste')}
      />
      <GroupCard
        title='Galera da faculdade'
        onPress={() => console.log('teste')}
      />
    </S.Wrapper>
  );
}
