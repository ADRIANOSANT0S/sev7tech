import { ReactNode } from 'react'

import { LinkContainer } from './styles'

export type Props = {
  children: string | ReactNode
  href: string
  className?: string
}

const LinkItem = ({ children, href, className }: Props) => {
  return (
    <LinkContainer href={href} className={className}>
      {children}
    </LinkContainer>
  )
}

export default LinkItem
