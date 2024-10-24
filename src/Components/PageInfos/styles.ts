'use client'
import styled from 'styled-components'

import { pxToEm } from './../../utils/stringUtils'
import { LinkContainer } from '../Typography/LinkItem/styles'
import { colors } from '../GlobalStyle/theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 80px 0;
  z-index: 100;
`

export const BreadcrumbNavigation = styled.nav`
  margin-top: 120px;

  ul {
    display: flex;
    align-items: center;

    svg {
      padding-top: 4px;
      height: 56px;
      color: ${colors.pureWhite};
    }
  }

  ${LinkContainer} {
    font-size: ${pxToEm(18)};
    letter-spacing: 1px;
  }
`
