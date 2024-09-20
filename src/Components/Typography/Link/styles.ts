'use client'

import Link from 'next/link'
import styled from 'styled-components'

import { pxToEm } from '@/utils/stringUtils'
import { colors } from '@/Components/GlobalStyle'

interface LinkProp {
  typeLink: 'lig' | 'dar'
}

export const LinkContainer = styled(Link)<LinkProp>`
  font-size: ${pxToEm(16)};
  font-weight: ${(prop) => (prop.typeLink === 'lig' ? 600 : 400)};
  line-height: 28px;
  color: ${(prop) => (prop.typeLink === 'lig' ? colors.white : colors.grey)};
`
