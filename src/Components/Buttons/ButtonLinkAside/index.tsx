import { PiArrowRightBold } from 'react-icons/pi'

import * as S from './styles'

type Props = {
  id: number
  activeId: number
  children: string
  href: string
}

const LinkAside = ({ id, activeId, children, href }: Props) => {
  return (
    <S.ButtonAside className={id === activeId ? 'bgColor' : ''} href={href}>
      {children}
      <PiArrowRightBold
        size={24}
        alignmentBaseline="central"
        aria-label="Icon direction"
      />
    </S.ButtonAside>
  )
}

export default LinkAside
