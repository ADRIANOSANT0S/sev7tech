'use client'

import styled from 'styled-components'

import { Props } from '.'

export const SectionBanner = styled.section<Omit<Props, 'children'>>`
  height: auto;
  width: 100vw;
  object-fit: fill;
  background-image: url(${(prop) => prop.url});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
`
