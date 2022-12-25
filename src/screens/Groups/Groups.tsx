import {
  Button,
  GroupCard,
  Header,
  Highlight,
  ListEmpty,
} from '@components/index';
import { useState } from 'react';
import { FlatList } from 'react-native';

import * as S from './Groups.styles';

export function Groups() {
  const [groups] = useState<string[]>([
    'Galera do Ignite',
    'Galera do Discord',
    'Galera da faculdade',
  ]);

  return (
    <S.Wrapper>
      <Header />

      <Highlight title='Turmas' subtitle='Jogue com sua turma' />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => console.log(item)} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message='Você ainda não tem nenhuma turma cadastrada' />
        }
      />

      <Button type='primary' text='Criar nova turma' />
    </S.Wrapper>
  );
}
