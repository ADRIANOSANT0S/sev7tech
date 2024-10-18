import styled from 'styled-components'

import { colors } from './../../GlobalStyle/theme'

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  span {
    display: none;
  }
`

export const DropdownToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-right: 16px;

  font-size: 16px;
  color: ${colors.pureWhite};
  font-weight: 400;

  svg {
    color: ${colors.goldAccent};
    width: 100%;
    margin-left: 8px;
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
  width: 56px;
  border: 1px solid ${colors.charcoal};

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in;
  z-index: 2;
`

export const DropdownItem = styled.li`
  position: relative;
  text-align: center;
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
`
