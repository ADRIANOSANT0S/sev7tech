'use client'

import { LinkItem, Title } from '../Typography'
import ButtonSwitch from '../Buttons/ButtonSwitch'
import * as S from './styles'
import ButtonLanguage from '../Buttons/ButtonLanguage'

const Header = () => {
  return (
    <S.HeaderContainer>
      <div className="container-flex container">
        <Title as="h1">Sev7Tech</Title>
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
          <ButtonSwitch />
        </div>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
