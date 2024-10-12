'use client'

import styled from 'styled-components'
import { lighten } from 'polished'

import { Props } from '.'

import { colors } from '@/Components/GlobalStyle/theme'

// Omite  proprieties that are not used the component
type OmitElementProps = Omit<
  Props,
  'title' | 'details' | 'goTo' | 'title2' | 'children'
>

export const BgImage = styled.div<OmitElementProps>`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 40px 30px;
  max-width: 368px;
  height: 340px;
  border-radius: 8px;
  background-image: url(${(prop) => prop.url});

  div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    z-index: 10;
    opacity: 0;

    > svg {
      background-color: ${colors.deepOcean};
      color: ${colors.goldAccent};
      padding: 8px;
      border-radius: 8px;
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

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    top: 100%;
    border-radius: 8px;
    background: linear-gradient(to right, #7c3aed, #4f46e5);
    opacity: 0;
    transition: transform 0.3s ease-out;
  }

  &:hover {
    div:first-child {
      opacity: 1;
      transition: opacity 0.3s ease-in;
    }

    div:last-child {
      opacity: 0;
      transition: opacity 0.1s ease-out;
    }

    &::before {
      top: 0;
      opacity: 1;
      transition: top 0.3s ease-out;
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
  transition: opacity 0.3s ease-in;

  svg {
    display: flex;
    color: ${colors.goldAccent};
    border-right: 1px solid ${lighten(0.5, colors.charcoal)};
    margin-right: 8px;
    padding-right: 8px;
  }
`
