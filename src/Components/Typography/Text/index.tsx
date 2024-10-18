import { TextContainer } from './styles'

export type Props = {
  children: string | React.ReactNode
  as: 'p' | 'span'
  size?: 'small' | 'normal'
  weightText?: 'b'
}

const Text = ({ children, as = 'p', size = 'normal', weightText }: Props) => {
  return (
    <TextContainer as={as} size={size} weightText={weightText}>
      {children}
    </TextContainer>
  )
}

export default Text
