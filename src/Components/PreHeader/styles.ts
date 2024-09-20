'use client'

import { styled } from 'styled-components'

import { colors } from '../GlobalStyle'

export const PreHeaderContainer = styled.div`
  background-color: ${colors.lightBlues};
  padding: 16px 0;

  span {
    margin-left: 8px;
  }

  ul {
    li:nth-child(2) {
      margin: 0 8px;
    }
  }
`
