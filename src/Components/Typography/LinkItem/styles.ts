'use client'

import styled from 'styled-components'
import { lighten } from 'polished'

import { colors } from './../../GlobalStyle/theme'

import { Link } from '@/i18n/routing'
import { pxToEm } from '@/utils/stringUtils'

export const LinkContainer = styled(Link)`
  font-size: ${pxToEm(16)};
  font-weight: 600;
  line-height: 28px;
  padding: 8px;
  color: ${({ theme }) => theme.secondaryText};
  transition: color 0.3s ease;

  &:hover {
    color: ${lighten(0.07, colors.goldAccent)};
    transition: color 0.3s ease-in-out;
  }
`
