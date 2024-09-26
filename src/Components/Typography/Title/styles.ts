'use client'

import { styled } from 'styled-components'

import { Props } from '.'

import { pxToEm } from '@/utils/stringUtils'

export const TitleContainer = styled.h2<Omit<Props, 'children' | 'as'>>`
  font-size: ${(prop) =>
    prop.as === 'h1'
      ? pxToEm(56)
      : prop.as === 'h2'
        ? pxToEm(40)
        : prop.as === 'h3'
          ? pxToEm(20)
          : pxToEm(16)};
  line-height: ${(prop) =>
    prop.as === 'h1'
      ? '64px'
      : prop.as === 'h2'
        ? '48px'
        : prop.as === 'h3'
          ? '32px'
          : '28px'};
  font-weight: ${(prop) => (prop.as === 'h4' ? 600 : 700)};
  color: ${({ colorTitle, theme }) =>
    colorTitle === 'b'
      ? theme.primaryText
      : colorTitle === 'g'
        ? theme.button
        : theme.secondaryText};
  transition: color 0.3s ease;
`
