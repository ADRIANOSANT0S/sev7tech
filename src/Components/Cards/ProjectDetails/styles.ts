'use client'

import styled from 'styled-components'

import { TextContainer } from '@/Components/Typography/Text/styles'
import { colors } from '@/Components/GlobalStyle/theme'
import { LinkContainer } from '@/Components/Typography/LinkItem/styles'

export const ImageContainer = styled.div`
  width: 100vw;
  height: 600px;
  margin-bottom: 56px;
`

export const DetailsContainer = styled.div`
  align-items: flex-start;
  gap: 80px;

  h2 {
    margin-bottom: 24px;
  }

  h3 {
    margin-bottom: 16px;
  }

  div {
    margin-bottom: 40px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${TextContainer} {
      margin-bottom: 16px;
    }
  }

  ${TextContainer}:last-child {
    margin-bottom: 0px;
  }

  li {
    display: flex;
    align-items: baseline;
    gap: 8px;

    svg {
      color: ${colors.goldAccent};
    }
  }
`

export const ListTechnology = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 60%;
`

export const AsideContainer = styled.aside`
  width: 40%;
  padding: 24px;
  background-color: ${colors.skyColor};
  border-radius: 8px;

  div {
    margin-bottom: 16px;

    ${LinkContainer}, span {
      font-size: 14px;
      font-weight: 500;
      color: ${colors.pureWhite};
    }

    ${LinkContainer} {
      padding: 16px 0;
      text-decoration: underline;

      &:hover {
        color: ${colors.goldAccent};
      }
    }
  }
`
