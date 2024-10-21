import { PiArrowRightBold } from 'react-icons/pi'

import * as S from './styles'

import { LinkItem } from '@/Components/Typography'

type Props = {
  children: string
  href: string
}

const LinkAside = ({ children, href }: Props) => {
  return (
    <S.ButtonAside className="container-flex">
      <LinkItem href={href}>{children}</LinkItem>
      <PiArrowRightBold
        size={24}
        alignmentBaseline="central"
        aria-description="Icon direction"
      />
    </S.ButtonAside>
  )
}

export default LinkAside
