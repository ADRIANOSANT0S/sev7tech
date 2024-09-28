import styled from 'styled-components'
import { darken, lighten } from 'polished'

import { LinkContainer } from './../Typography/LinkItem/styles'
import { colors } from '../GlobalStyle/theme'
import { TitleContainer } from '../Typography/Title/styles'

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) =>
    theme.mode === 'dark'
      ? darken(0.05, theme.bgFooter)
      : lighten(0.05, theme.bgFooter)};
  padding: 20px 0;

  // Style div logo
  .container:first-child {
    padding: 100px 0;
    align-items: flex-start;
    flex-wrap: wrap;

    > div {
      max-width: 272px;

      img,
      h3 {
        margin-bottom: 32px;
      }
    }

    // Style container IT
    ul {
      display: flex;
      gap: 8px;
      flex-direction: column;

      // Align item
      li {
        display: flex;
        align-items: center;
      }

      li a:hover {
        color: ${lighten(0.07, colors.goldAccent)} !important;
        transition: color 0.3s ease-in-out;
      }
    }

    // Style div contact
    > div:last-child {
      > div {
        margin-bottom: 8px;
      }

      h4 {
        margin-bottom: 2px;
      }

      ul {
        display: flex;
        row-gap: 8px;
      }

      span {
        font-weight: 400;
      }
    }
  }

  p,
  span,
  li > ${LinkContainer}, ${TitleContainer}, svg {
    color: ${lighten(0.6, colors.charcoal)};
  }

  // Style Terms
  .container:last-child {
    li {
      &:first-child {
        margin-right: 16px;
      }

      > a:hover {
        color: ${lighten(0.07, colors.goldAccent)};
        transition: color 0.3s ease-in-out;
      }
    }
  }
`
