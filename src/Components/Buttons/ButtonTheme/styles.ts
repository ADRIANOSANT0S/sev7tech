import { styled } from 'styled-components'

export const StyledWrapper = styled.div`
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 2em;
    height: 2em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* O slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.buttonTeme};
    transition: 0.5s;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9em;
    color: ${({ theme }) => theme.primaryText};
    transition:
      background-color 0.3s ease-in,
      color 0.3s ease-in;
  }

  .slider:before {
    content: '🔅';
    font-size: 18px;
  }

  input:checked + .slider:before {
    content: '🌙';
    rotate: 100deg;
    font-size: 18px;
  }

  input:checked + .slider {
    background-color: ${({ theme }) => theme.primaryText};
    transition: background-color 0.3s ease-in;
  }
`
