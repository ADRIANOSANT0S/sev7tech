import * as S from './styles'

import { LinkItem } from '@/Components/Typography'

type Props = {
  children: React.ReactNode
  title: string
  details: string
  href: string
}

const ContactData = ({ children, title, details, href }: Props) => {
  return (
    <S.ContactDatContainer>
      {children}
      <LinkItem href={href} title={title}>
        {details}
      </LinkItem>
    </S.ContactDatContainer>
  )
}

export default ContactData
