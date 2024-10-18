import * as S from './styles'

type Props = {
  children: string
  onClink?: () => void
}

const ButtonSubmit = ({ children, onClink }: Props) => {
  return <S.ButtonContainer onClick={onClink}>{children}</S.ButtonContainer>
}

export default ButtonSubmit
