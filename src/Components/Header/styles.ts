'use client'

import styled from 'styled-components'

import { colors } from '../GlobalStyle'

export const HeaderContainer = styled.header`
  padding: 40px 0;
  background-color: ${colors.blue};
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
