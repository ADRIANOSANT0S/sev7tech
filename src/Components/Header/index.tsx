import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { LinkItem } from '../Typography'
import ButtonSwitch from '../Buttons/ButtonTheme'
import * as S from './styles'
import ButtonLanguage from '../Buttons/ButtonLanguage'

import useWindowScrollY from '@/hooks/useWindowScrollY'

type Prop = {
  onToggle: () => void
  isThemeLight: boolean
}

const Header = ({ onToggle, isThemeLight }: Prop) => {
  const t = useTranslations('Header')

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
              <LinkItem href="/">{t('home')}</LinkItem>
            </li>
            <li>
              <LinkItem href="/about">{t('about')}</LinkItem>
            </li>
            <li>
              <LinkItem href="/services">{t('services')}</LinkItem>
            </li>
            <li>
              <LinkItem href="/projects">{t('projects')}</LinkItem>
            </li>
            <li>
              <LinkItem href="/products">{t('products')}</LinkItem>
            </li>
            <li>
              <LinkItem href="/contact">{t('contact')}</LinkItem>
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
