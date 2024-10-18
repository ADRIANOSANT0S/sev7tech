'use client'

import styled from 'styled-components'
import { darken } from 'polished'

import { pxToEm } from './../../../utils/stringUtils'

import { colors } from '@/Components/GlobalStyle/theme'

export const ButtonContainer = styled.button`
  font-size: ${pxToEm(18)};
  color: ${colors.pureWhite};
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 20px;
  border: none;
  background-color: ${colors.navy};

  &:hover {
    background-color: ${darken(0.05, colors.navy)};
  }
`
