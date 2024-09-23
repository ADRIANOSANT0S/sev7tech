'use client'

import { styled } from 'styled-components'

import { colors } from '../GlobalStyle/theme'

export const PreHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.bgPreHeader};
  padding: 8px 0;
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
