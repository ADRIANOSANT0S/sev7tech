import styled from 'styled-components'

import { colors } from './../../GlobalStyle/theme'

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const DropdownToggle = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 16px;

  font-size: 16px;
  color: ${colors.pureWhite};
  font-weight: 400;

  svg {
    color: ${colors.goldAccent};
    margin-left: 4px;
  }
`

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.bgHeader};
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 80px;
  border: 1px solid ${colors.charcoal};

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in;
`

export const DropdownItem = styled.li`
  position: relative;
  padding: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.pureWhite};
  font-size: 16px;
  color: ${colors.pureWhite};
  font-weight: 400;

  &:hover {
    background-color: ${colors.skyColor};
    transition: background-color 0.3s ease-in;
  }
`

export const FlagImage = styled.img`
  width: 20px;
  margin-right: 8px;
`
