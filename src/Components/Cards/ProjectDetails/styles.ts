'use client'

import styled from 'styled-components'

import { TextContainer } from '@/Components/Typography/CustomText/styles'
import { colors } from '@/Components/GlobalStyle/theme'
import { LinkContainer } from '@/Components/Typography/LinkItem/styles'

export const ImageContainer = styled.div`
  width: 100%;
  height: 600px;
  margin-bottom: 56px;
  border-radius: 8px;
  overflow: hidden;
`

export const DetailsContainer = styled.div`
  align-items: flex-start;
  gap: 80px;

  /* When refactor create a component for this block */
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
  /* end */
  li {
    display: flex;
    align-items: baseline;
    gap: 8px;

    svg {
      color: ${colors.goldAccent};
    }
  }
`

export const DetailsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 60%;

  &.fullSize {
    width: 100%;
  }
`

export const AsideContainer = styled.aside`
  width: 40%;
  padding: 24px;
  background-color: ${colors.skyColor};
  border-radius: 8px;

  /* Create a component for this block */
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

    &.isShow {
      display: block;
    }

    &.isHidden {
      display: none;
    }
  }
  /* end */
`
