'use client'

import styled from 'styled-components'
import { darken, lighten } from 'polished'

import { colors } from '@/Components/GlobalStyle/theme'
import { LinkContainer } from '@/Components/Typography/LinkItem/styles'

export const ContactDatContainer = styled.div`
  display: flex;
  align-items: center;
  row-gap: 4px;

  background: linear-gradient(
    to bottom,
    ${lighten(0.1, colors.twilightBlue)} 2%,
    ${darken(0.02, colors.twilightBlue)} 100%
  );
  padding: 40px 32px;
  border-radius: 20px;

  box-shadow:
    0 4px 10px rgba(0, 0, 0, 0.1),
    0 8px 20px rgba(0, 0, 0, 0.2);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow:
      0 6px 12px rgba(0, 0, 0, 0.15),
      0 12px 24px rgba(0, 0, 0, 0.3),
      0 0 15px ${lighten(0.2, colors.twilightBlue)};
    transition: transform 0.3s ease-out;
  }

  ${LinkContainer} {
    font-size: 18px;
    color: ${({ theme }) => theme.primaryText};
  }

  svg {
    height: 24px;
    width: 24px;
    color: ${({ theme }) => theme.primaryText};
  }
`
