'use client'

import styled from 'styled-components'

import { TitleContainer } from '../Typography/Title/styles'
import { TextContainer } from '../Typography/CustomText/styles'
import { colors } from '../GlobalStyle/theme'

export const ServiceItemContainer = styled.div`
  width: 100%;

  > div {
    max-width: 832px;
    width: 100;
    height: 480;
  }

  ${TitleContainer} {
    margin-bottom: 24px;
  }
`
export const ServiceDetails = styled.div`
  margin-top: 40px;

  ${TextContainer} {
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const ServiceBenefits = styled.div`
  margin: 64px 0;

  ul {
    margin: 32px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;

    li {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color: ${colors.goldAccent};
      }
    }
  }
`

export const ServiceDifference = styled.div`
  ${TextContainer} {
    margin-bottom: 32px;
  }
`
