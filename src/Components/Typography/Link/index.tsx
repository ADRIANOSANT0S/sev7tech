import { LinkContainer } from './styles'

type Props = {
  children: string
}

const Links = ({ children }: Props) => {
  return (
    <LinkContainer typeLink="lig" href={''}>
      {children}
    </LinkContainer>
  )
}

export default Links
