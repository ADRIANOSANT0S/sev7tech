'use clint'

import styled, { keyframes } from 'styled-components'

import { colors } from '@/Components/GlobalStyle/theme'
import { Link } from '@/i18n/routing'

// Definindo a animação de brilho
const glow = keyframes`
  0% {
    box-shadow: 0 0 5px ${colors.goldAccent};
  }
  50% {
    box-shadow: 0 0 20px ${colors.goldAccent}, 0 0 30px ${colors.goldAccent};
  }
  100% {
    box-shadow: 0 0 5px ${colors.goldAccent};
  }
`

export const ButtonCallAction = styled(Link)`
  padding: 10px 16px;
  border: 1px solid ${colors.goldAccent};
  border-radius: 20px;
  color: ${colors.goldAccent};
  background-color: transparent;
  font-weight: 700;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    border-color: ${colors.goldAccent};
    background-color: ${colors.goldAccent};
    color: ${colors.pureWhite};
    animation: ${glow} 1.5s ease-in-out infinite; /* Aplicando a animação de brilho */
  }
`
