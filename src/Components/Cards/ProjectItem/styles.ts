'use client'
import styled from 'styled-components'

import { TitleContainer } from './../../Typography/Title/styles'

import { colors } from '@/Components/GlobalStyle/theme'
import { TextContainer } from '@/Components/Typography/CustomText/styles'

export const ProjectItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  width: 100%;
  background-color: ${colors.twilightBlue};
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

export const ImageContainer = styled.div`
  max-width: 600px;
  width: 100%;
  height: 328px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

export const ProjectDetails = styled.div`
  padding: 16px;

  ${TextContainer} {
    margin: 10px 0;
  }

  ${TitleContainer} {
    font-size: 16px;
    font-weight: 700;
  }
`

export const TechnologyList = styled.ul`
  display: flex;
  gap: 8px;

  ${TextContainer} {
    font-size: 18px;
    color: ${colors.goldAccent};
    font-weight: 200;
  }
`
