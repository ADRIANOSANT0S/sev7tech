'use client'

import styled from 'styled-components'
import { darken } from 'polished'

import { colors } from '@/Components/GlobalStyle/theme'
import { TextContainer } from '@/Components/Typography/Text/styles'
import { Link } from '@/i18n/routing'

export const ChildrenBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  position: relative;
  z-index: 10;

  > div {
    width: 80%;

    ${TextContainer} {
      margin: 24px 0 56px;
      width: 70%;
    }
  }
`

export const SectionCards = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 120px 0;
  row-gap: 40px;
`

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 40px;
`

export const ServicesBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
`

export const SectionAbout = styled.section`
  padding: 120px 0;
  background-color: ${darken(0.05, colors.navy)};

  .container {
    gap: 40px;
    align-items: flex-start;
    width: 100%;

    > div:last-child {
      width: 632px;
    }
  }

  h3:first-child {
    margin-bottom: 8px;
  }

  p {
    margin: 32px 0;
  }

  ul {
    gap: 16px;

    li {
      gap: 8px;
      width: 50%;

      svg {
        height: 4em;
        color: ${colors.goldAccent};
      }
    }
  }
`

export const ImageContainer = styled.div`
  max-width: 632px;
  width: 100%;
  height: auto;
  border-radius: 20px;
  overflow: hidden;
`

export const OwnerBusiness = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #ccc;

  div {
    height: 72px;
    width: 72px;
    border-radius: 50%;
    overflow: hidden;
  }
`
export const SectionCostumers = styled.section`
  padding: 120px 0;

  > div > div:first-child {
    margin-bottom: 56px;

    ${TextContainer} {
      margin: 32px 0;
    }
  }
`

export const SectionContact = styled.section`
  padding: 120px 0;

  > div {
    display: flex;
    align-items: flex-start;
    gap: 56px;
  }

  ${TextContainer} {
    margin: 32px 0;
  }
`

export const ImageContact = styled.div`
  max-width: 664px;
  width: 100%;
  height: 472px;
  border-radius: 20px;
  overflow: hidden;
`
