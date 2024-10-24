'use client'

import styled from 'styled-components'

import { NavigationContainer } from '@/Components/NavigationServices/styles'
import { ServiceItemContainer } from '@/Components/ServicesItem/styles'

export const ServicesContainer = styled.section`
  padding: 120px 0;

  > div {
    gap: 56px;
    align-items: flex-start;

    ${ServiceItemContainer} {
      width: 65%;
    }

    ${NavigationContainer} {
      width: 30%;
    }
  }
`
