'use client'

import styled from 'styled-components'

import { TextContainer } from '@/Components/Typography/Text/styles'
import { TitleContainer } from '@/Components/Typography/Title/styles'

export const AboutSection = styled.section`
  padding: 120px 0;

  ${TextContainer} {
    margin: 32px 0;
  }
`

export const ValueSection = styled.section`
  padding: 120px 0;

  ul {
    display: flex;
    gap: 40px;
    margin-top: 88px;

    .center-heigh {
      transform: translateY(-40px);
    }
  }
`

export const SectionCostumers = styled.section`
  padding: 120px 0;

  > div {
    ${TitleContainer} {
      margin-bottom: 32px;
    }
  }
`
