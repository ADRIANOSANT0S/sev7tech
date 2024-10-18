'use client'

import styled from 'styled-components'

import { TextContainer } from '@/Components/Typography/Text/styles'
import { colors } from '@/Components/GlobalStyle/theme'

export const CardInfos = styled.div`
  position: relative;
  max-width: 400px;
  width: 100%;
  height: 516px;
  padding: 16px;
  background-color: ${({ theme }) => theme.bgCardInfos};
  border-top-left-radius: 48px 48px;
  border-bottom-right-radius: 48px 48px;
  overflow: hidden;
  box-shadow: 4px 2px 8px rgba(0, 0, 0, 0.5);

  > div {
    svg {
      position: absolute;
      top: 256px;
      left: 16px;
      width: 40px;
      height: 40px;
      color: ${colors.goldAccent};
      z-index: 10;
      padding: 4px;
      border-radius: 8px;
    }
  }
`
export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 400px;
  width: 100%;
  height: 280px;
  padding-bottom: 40px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`

export const InfoContainer = styled.div`
  margin-top: 280px;

  ${TextContainer} {
    padding: 16px 0;
  }
`
