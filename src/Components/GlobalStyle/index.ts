'use client'

import { Jost } from 'next/font/google'
import { createGlobalStyle } from 'styled-components'

const jost = Jost({
  subsets: ['latin'],
  display: 'swap'
})

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${jost.style.fontFamily};
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.bgBody};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .container {
    margin: 0 auto;
    max-width: 1440px;
    width: 90vw;
  }

  .container-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .show {
    display: block;
  }
`
