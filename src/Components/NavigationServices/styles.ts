'use client'

import styled from 'styled-components'

import { colors } from '../GlobalStyle/theme'

export const NavigationContainer = styled.aside`
  background-color: ${colors.skyColor};
  width: 100%;
  padding: 32px 24px;
  border-radius: 8px;
  position: sticky;
  top: 0px;

  nav {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
`
