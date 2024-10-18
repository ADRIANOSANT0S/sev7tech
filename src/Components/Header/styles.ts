'use client'

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 16px 0;
  background-color: ${({ theme }) =>
    theme.bgHeader}; // Usar a cor de fundo do tema
  color: ${({ theme }) => theme.primaryText};
  box-shadow: 0px 21px 49px -14px ${({ theme }) => theme.shadow};
  z-index: 1000;

  &.fixedContainer {
    position: fixed;
    width: 100%;
    top: 0;
  }

  &.container-flex {
    display: flex;
  }
`

export const NavContainer = styled.nav`
  width: auto;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
