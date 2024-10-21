'use client'

import styled from 'styled-components'
import { lighten } from 'polished'

import { colors } from './../../GlobalStyle/theme'

import { LinkContainer } from '@/Components/Typography/LinkItem/styles'

export const ButtonAside = styled.div`
  padding: 12px 24px;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  background: linear-gradient(
    90deg,
    ${lighten(0.2, colors.twilightBlue)} 0%,
    ${colors.twilightBlue} 100%
  );
  background-size: 0% 100%;
  background-position: left center;
  transition:
    background-size 0.4s ease-in-out,
    background-position 0.4s ease-in-out;

  svg {
    color: ${colors.pureWhite};
    transition:
      color 0.3s ease,
      padding-left 0.3s ease;
  }

  &:hover {
    background-size: 100% 100%;
    background-position: left center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);

    ${LinkContainer} {
      color: ${colors.goldAccent};
    }

    svg {
      padding-left: 4px;
      color: ${colors.goldAccent};
    }
  }

  &:not(:hover) {
    background-size: 0% 100%;
    background-position: left center;
    transition:
      background-size 0.4s ease-in-out,
      background-position 0.4s ease-in-out;
  }
`
