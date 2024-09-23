'use client'

import Link from 'next/link'
import styled from 'styled-components'

import { pxToEm } from '@/utils/stringUtils'

export const LinkContainer = styled(Link)`
  font-size: ${pxToEm(16)};
  font-weight: 600;
  line-height: 28px;
  color: ${({ theme }) => theme.secondaryText};
  transition: color 0.3s ease;
`
