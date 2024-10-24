import { LinkContainer } from './styles'

export type Props = {
  children: string | React.ReactNode
  href: string
  className?: string
  title?: string
}

const LinkItem = ({ children, href, className, title }: Props) => {
  return (
    <LinkContainer href={href} className={className} title={title}>
      {children}
    </LinkContainer>
  )
}

export default LinkItem
