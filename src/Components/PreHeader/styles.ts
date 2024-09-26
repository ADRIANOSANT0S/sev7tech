'use client'

import { styled } from 'styled-components'

import { colors } from '../GlobalStyle/theme'
import { LinkContainer } from '../Typography/LinkItem/styles'

export const PreHeaderContainer = styled.div`
  height: 32px;
  background-color: ${({ theme }) => theme.bgPreHeader};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  span {
    margin-left: 8px;
  }

  ul {
    li:nth-child(2) {
      margin: 0 8px;
    }
  }

  ${LinkContainer} {
    padding: 2px;
  }

  svg {
    width: 16px;
    width: 16px;

    &:hover {
      color: ${colors.goldAccent};
      transition: color 0.2s ease-in;
    }
  }

  &.hideContainer {
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }
`
