'use client'

import styled from 'styled-components'

import { pxToEm } from '@/utils/stringUtils'
interface TextProps {
  size: 'small' | 'normal'
  weightText?: 'b'
}

export const TextContainer = styled.p<TextProps>`
  font-size: ${(prop) => (prop.size === 'normal' ? pxToEm(16) : pxToEm(14))};
  line-height: ${(prop) => (prop.size === 'normal' ? '28px' : '22px')};
  font-weight: ${(prop) => (prop.weightText === 'b' ? 600 : 400)};
`
