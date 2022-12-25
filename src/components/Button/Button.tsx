import { TouchableOpacityProps } from 'react-native';
import * as S from './Button.styles';

export type ButtonTypes = 'primary' | 'danger';

export type ButtonProps = TouchableOpacityProps & {
  type?: ButtonTypes;
  text: string;
};

export function Button({ text, type = 'primary', ...rest }: ButtonProps) {
  return (
    <S.Wrapper type={type} {...rest}>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
}
