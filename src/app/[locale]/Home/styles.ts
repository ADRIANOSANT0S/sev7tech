import styled from 'styled-components'

import { colors } from '@/Components/GlobalStyle/theme'

export const ChildrenBanner = styled.div`
  display: flex;
  gap: 10%;

  > div {
    width: 50%;

    h1 {
      margin-bottom: 32px;
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
  margin-bottom: 40px;

  h3 {
    color: ${colors.goldAccent};
    margin-bottom: 8px;
  }
`

export const SectionAbout = styled.section`
  padding: 120px 0;
  > div {
    gap: 40px;
    align-items: flex-start;
  }

  h3:first-child {
    color: ${colors.goldAccent};
    margin-bottom: 8px;
  }

  p {
    margin: 24px 0 40px 0;
  }

  ul {
    gap: 16px;

    li {
      gap: 8px;
      width: 50%;
    }
  }
`

export const ImageContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  height: auto;
  border-radius: 20px;
  overflow: hidden;
`
