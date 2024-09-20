import { ReactNode } from 'react'

import { LinkContainer } from './styles'

type Props = {
  children: string | ReactNode
  href: string
  typeLink?: 'lig' | 'dar'
  className?: string
}

const LinkItem = ({ children, href, className, typeLink = 'lig' }: Props) => {
  return (
    <LinkContainer typeLink={typeLink} href={href} className={className}>
      {children}
    </LinkContainer>
  )
}

export default LinkItem
