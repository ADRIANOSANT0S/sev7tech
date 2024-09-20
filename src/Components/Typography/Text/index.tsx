import { TextContainer } from './styles'

type Props = {
  children: string
  as: 'p' | 'span'
}

const Text = ({ children, as = 'p' }: Props) => {
  return (
    <TextContainer as={as} size="normal">
      {children}
    </TextContainer>
  )
}

export default Text
