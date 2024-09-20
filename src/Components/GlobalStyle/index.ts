'use client'

import { Jost } from 'next/font/google'
import { createGlobalStyle } from 'styled-components'

const jost = Jost({
  subsets: ['latin'],
  display: 'swap'
})

export const colors = {
  blue: '#0A2540',
  lightBlues: '#3A7CA5',
  gold: '#C5A880',
  black: '#000000',
  grey: '#7A7A7A',
  white: '#FFFFFF'
}

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
    background-color: ${colors.black};
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
`
