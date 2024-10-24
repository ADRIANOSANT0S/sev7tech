'use client'

import styled from 'styled-components'
import { lighten } from 'polished'

import { colors } from '../GlobalStyle/theme'
import { LinkContainer } from '../Typography/LinkItem/styles'

import { pxToEm } from '@/utils/stringUtils'

export const FormContainer = styled.form`
  padding: 40px;
  background-color: ${colors.skyColor};
  width: 100%;
  border-radius: 20px;
`
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    line-height: 26px;
    margin-bottom: 8px;
    color: #fff;
  }

  input,
  textarea {
    padding: 8px 16px;
    margin-bottom: 24px;
    outline: none;
    border: 1px solid transparent;
    border-radius: 20px;
    font-size: ${pxToEm(16)};
    font-weight: 500;
    background-color: ${lighten(0.3, colors.skyColor)};
  }

  textarea {
    height: 160px;
    resize: none;
    margin-bottom: 16px;
  }
`
export const InputGroupFlex = styled(InputGroup)`
  display: flex;
  flex-direction: row;
  gap: 24px;

  ${InputGroup} {
    margin-bottom: 0;
    width: 50%;
  }
`

export const InputGroupTerms = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  border-radius: 10px;
  color: ${colors.pureWhite};
  font-size: ${pxToEm(18)};
  font-weight: 600;

  input {
    border: none;
    outline: none;
    background-color: ${lighten(0.3, colors.skyColor)};
    margin-bottom: 32px;
    width: 14px;
    height: 14px;

    &:checked {
      background-color: ${colors.navy};
    }
  }

  ${LinkContainer} {
    text-decoration: underline;
  }
`
