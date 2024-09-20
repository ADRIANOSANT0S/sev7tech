import { TitleContainer } from './styles'

type Prop = {
  children: string
}

const Title = ({ children }: Prop) => {
  return <TitleContainer as="h2">{children}</TitleContainer>
}

export default Title
