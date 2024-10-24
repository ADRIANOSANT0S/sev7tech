'use client'

import styled from 'styled-components'

export const BannerContainer = styled.section`
  position: relative;
  height: auto;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 120px 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`
