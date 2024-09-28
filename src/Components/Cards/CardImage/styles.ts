'use client'

import styled from 'styled-components'
import { lighten } from 'polished'

import { Props } from '.'

import { colors } from '@/Components/GlobalStyle/theme'

export const BgImage = styled.div<Props>`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 40px 30px;
  background-image: url(${(prop) => prop.url});

  max-width: 368px;
  height: 340px;
  border-radius: 8px;

  div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    > svg {
      background-color: ${colors.deepOcean};
      transition: background-color 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);

      color: ${colors.goldAccent};
      margin-right: 8px;
      padding-right: 8px;
    }

    h4,
    svg,
    span {
      margin-bottom: 8px;
    }

    span {
      color: white;
    }
  }

  &:hover {
    div:first-child {
      opacity: 1;
      transition: opacity 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }

    div:last-child {
      opacity: 0;
      transition: opacity 0.1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: blue;
      transition: background-color 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);

      border-radius: 8px;
    }
  }
`

export const Description = styled.div`
  display: flex;
  padding: 20px 30px;
  position: absolute;
  width: 90%;
  border-radius: 8px;
  background-color: white;
  bottom: -32px;
  z-index: 100;
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: background-color 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  svg {
    display: flex;
    color: ${colors.goldAccent};
    border-right: 1px solid ${lighten(0.5, colors.charcoal)};
    margin-right: 8px;
    padding-right: 8px;
  }
`
