'use client'

import styled from 'styled-components'

import { colors } from './../GlobalStyle/theme'
import { Props } from '.'

export const SectionBanner = styled.section<Omit<Props, 'children'>>`
  height: 480px;
  width: 100vw;
  object-fit: fill;
  background-image: url(${(prop) => prop.url});
  background-repeat: no-repeat;
  background-size: cover;

  padding: 100px 0;

  p {
    color: ${colors.pureWhite};
  }
`
