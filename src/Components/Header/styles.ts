'use client'

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 16px 0;
  background-color: ${({ theme }) =>
    theme.bgHeader}; // Usar a cor de fundo do tema
  color: ${({ theme }) => theme.primaryText};

  box-shadow: 0px 21px 49px -14px ${({ theme }) => theme.shadow};

  &.fixedContainer {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
  }

  &.container-flex {
    display: flex;
  }
`

export const NavContainer = styled.nav`
  max-width: 420px;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
