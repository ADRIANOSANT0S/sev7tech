import { ButtonCallAction } from './styles'

type Props = {
  children: string
  title: string
  href: string
}

const ButtonCTA = ({ children, title, href }: Props) => {
  return (
    <ButtonCallAction href={href} title={title}>
      {children}
    </ButtonCallAction>
  )
}

export default ButtonCTA
