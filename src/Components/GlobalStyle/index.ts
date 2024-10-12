'use client'

import { Jost } from 'next/font/google'
import { Kumbh_Sans } from 'next/font/google'
import { createGlobalStyle } from 'styled-components'

import { colors } from '@/Components/GlobalStyle/theme'

const jost = Jost({
  subsets: ['latin'],
  display: 'swap'
})

const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  display: 'swap'
})

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${kumbhSans.style.fontFamily};
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.bgBody};
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
  }

h1,
h2,
h3,
h4 {
    font-family: ${jost.style.fontFamily};
  }

  .container {
    margin: 0 auto;
    max-width: 1280px;
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

  .colorGold {
    color: ${colors.goldAccent}
  }
`
