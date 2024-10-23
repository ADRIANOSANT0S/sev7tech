'use client'

import styled from 'styled-components'
import { lighten } from 'polished'

import { colors } from '@/Components/GlobalStyle/theme'
import { TextContainer } from '@/Components/Typography/Text/styles'
import { TitleContainer } from '@/Components/Typography/Title/styles'
import { LinkContainer } from '@/Components/Typography/LinkItem/styles'

export const ProjectItemContainer = styled.div`
  position: relative;
  align-items: flex-start;
  justify-content: center;
  max-width: 584px;
  width: 100%;
  height: 480px;
  padding: 40px 24px;
  border-radius: 20px;

  > div:first-child {
    display: none;
    ${TextContainer} {
      margin-top: 16px;
    }

    z-index: 10;
  }

  > div:last-child {
    position: absolute;
    bottom: -48px;
    background: radial-gradient(
      circle,
      ${lighten(0.2, colors.twilightBlue)} 3%,
      ${colors.twilightBlue} 80%
    );
    padding: 16px;
    width: 90%;
    border-radius: 8px;
    z-index: 1;
    transition: 0.3s ease-out;

    svg {
      margin-right: 8px;
    }

    ${TextContainer} {
      display: flex;
      align-items: center;
      margin: 16px 0;
    }

    ${LinkContainer} {
      border: 2px solid;
      border-radius: 8px;
    }
  }

  &:hover {
    > div:first-child {
      display: block;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${colors.twilightBlue};
      opacity: 0.5;
      border-radius: 20px;
    }

    div:last-child {
      ${TitleContainer} {
        display: none;
        transition: display 0.3s ease-out;
      }

      ${TextContainer} {
        margin-top: 0;
      }
    }
  }
`
