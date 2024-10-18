'use client'

import styled from 'styled-components'
import { darken } from 'polished'

import { Link } from '@/i18n/routing'
import { colors } from '@/Components/GlobalStyle/theme'
import { pxToEm } from '@/utils/stringUtils'

export const ButtonContainer = styled(Link)`
  font-size: ${pxToEm(18)};
  color: ${colors.pureWhite};
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 20px;
  border: none;
  background-color: ${colors.skyColor};

  &:hover {
    background-color: ${darken(0.05, colors.skyColor)};
  }
`
