'use client'

import styled from 'styled-components'

import { TextContainer } from '@/Components/Typography/Text/styles'
import { TitleContainer } from '@/Components/Typography/Title/styles'
import { LinkContainer } from '@/Components/Typography/LinkItem/styles'

export const AboutSection = styled.section`
  padding: 120px 0;

  ${TextContainer} {
    margin: 32px 0;
  }
`

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  height: auto;

  > div {
    width: 100%;
  }
`
export const ImageContainer = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  overflow: hidden;
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

export const WhyChooseUs = styled.section`
  padding: 120px 0;

  ${ContainerFlex} {
    margin-top: 40px;

    ${TextContainer} {
      margin-bottom: 32px;
    }

    ${LinkContainer} {
      display: block;
      margin-top: 24px;
    }
  }
`
