import Image from 'next/image'

import { LinkItem } from '../Typography'
import ButtonSwitch from '../Buttons/ButtonTheme'
import * as S from './styles'
import ButtonLanguage from '../Buttons/ButtonLanguage'

import useWindowScrollY from '@/utils/getScrollY'

type Prop = {
  onToggle: () => void
  isThemeLight: boolean
}

const Header = ({ onToggle, isThemeLight }: Prop) => {
  const scrollY = useWindowScrollY()

  return (
    <S.HeaderContainer className={scrollY > 172 ? 'fixedContainer' : ''}>
      <div className="container-flex container">
        <Image
          src="/image/star.png"
          alt="Image test size logo"
          width={200}
          height={48}
        />
        <S.NavContainer>
          <ul>
            <li>
              <LinkItem href="/">Home</LinkItem>
            </li>
            <li>
              <LinkItem href="/About">About</LinkItem>
            </li>
            <li>
              <LinkItem href="/Projects">Projects</LinkItem>
            </li>
            <li>
              <LinkItem href="/Products">Products</LinkItem>
            </li>
            <li>
              <LinkItem href="/Contact">Contact</LinkItem>
            </li>
          </ul>
        </S.NavContainer>
        <div className="container-flex">
          <ButtonLanguage />
          <ButtonSwitch onClick={onToggle} isChecked={isThemeLight} />
        </div>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
