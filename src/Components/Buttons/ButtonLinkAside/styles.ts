'use client'

import styled from 'styled-components'
import { lighten } from 'polished'

import { colors } from './../../GlobalStyle/theme'

import { LinkContainer } from '@/Components/Typography/LinkItem/styles'

export const ButtonAside = styled(LinkContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-radius: 8px;
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  svg {
    color: ${colors.pureWhite};
    transition:
      color 0.3s ease,
      padding-left 0.3s ease;
  }

  &:hover,
  &:focus {
    background-size: 100% 100%;
    background-position: left center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    color: ${colors.goldAccent};
    transition: all 0.4s ease-in;

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

  &.bgColor {
    background: linear-gradient(
      90deg,
      ${lighten(0.2, colors.twilightBlue)} 0%,
      ${colors.twilightBlue} 100%
    );
    color: ${colors.goldAccent};
  }
`
