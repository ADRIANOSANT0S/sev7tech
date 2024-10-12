import { TitleContainer } from './styles'

export type Props = {
  children: string | React.ReactNode
  as: 'h1' | 'h2' | 'h3' | 'h4'
  colorTitle?: 'b' | 'g'
}

const Title = ({ children, as, colorTitle }: Props) => {
  return (
    <TitleContainer as={as} colorTitle={colorTitle}>
      {children}
    </TitleContainer>
  )
}

export default Title
