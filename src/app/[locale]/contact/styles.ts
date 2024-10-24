'use client'

import styled from 'styled-components'

import { TextContainer } from '@/Components/Typography/CustomText/styles'
import { colors } from '@/Components/GlobalStyle/theme'

export const ContactContainer = styled.section`
  padding: 120px 0;
  > div {
    h3 {
      color: ${colors.goldAccent};
    }

    > h2 {
      margin-bottom: 56px;
    }

    > div {
      align-items: flex-start;
      gap: 56px;

      > div {
        width: 60%;
      }
    }
  }
`

export const ContactInfos = styled.div`
  ${TextContainer} {
    margin: 32px 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`
