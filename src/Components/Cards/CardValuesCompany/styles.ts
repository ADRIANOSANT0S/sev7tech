'use client'

import styled from 'styled-components'

import { colors } from '@/Components/GlobalStyle/theme'
import { TitleContainer } from '@/Components/Typography/Title/styles'
import { TextContainer } from '@/Components/Typography/Text/styles'

export const CardValuerCompany = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  max-width: 400px;
  width: 100%;
  border-radius: 20px;
  background-color: ${colors.skyColor};

  svg {
    color: ${colors.goldAccent};
    width: 56px;
    height: 56px;
  }

  ${TitleContainer} {
    margin: 16px 0;
    text-align: center;
  }

  ${TextContainer} {
    text-align: justify;
  }
`
