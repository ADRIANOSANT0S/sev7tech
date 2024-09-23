import { TitleContainer } from './styles'

export type Prop = {
  children: string
  as: 'h1' | 'h2' | 'h3' | 'h4'
}

const Title = ({ children, as }: Prop) => {
  return <TitleContainer as={as}>{children}</TitleContainer>
}

export default Title
