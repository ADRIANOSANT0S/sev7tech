'use client'

import styled from 'styled-components'

import { Props } from '.'

import { pxToEm } from '@/utils/stringUtils'

export const TextContainer = styled.p<Omit<Props, 'children' | 'as'>>`
  font-size: ${(prop) => (prop.size === 'normal' ? pxToEm(16) : pxToEm(14))};
  line-height: ${(prop) => (prop.size === 'normal' ? '28px' : '22px')};
  font-weight: ${(prop) => (prop.weightText === 'b' ? 600 : 400)};
  color: ${({ theme }) => theme.primaryText};
  letter-spacing: 0.5px;
`
