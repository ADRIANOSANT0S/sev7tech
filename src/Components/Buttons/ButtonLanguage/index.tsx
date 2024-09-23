import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

import * as S from './styles'

import { Text } from '@/Components/Typography'

export default function App() {
  const options = [
    {
      value: 'PT',
      label: <S.FlagImage src={'/image/pt.png'} alt="PT flag" />
    },
    {
      value: 'EN',
      label: <S.FlagImage src={'/image/en.png'} alt="EN flag" />
    },
    {
      value: 'ES',
      label: <S.FlagImage src={'/image/es.png'} alt="ES flag" />
    }
  ]

  const [lang, setLang] = useState('PT')
  const [langLabel, setLangLabel] = useState(options[0].label)
  const [menuOpen, setMenuOpen] = useState(false)

  function handleClick(n: number) {
    setLangLabel(options[n].label)
    setLang(options[n].value)
    setMenuOpen(false) // fecha o menu ao clicar
  }

  return (
    <div>
      <S.DropdownContainer>
        <S.DropdownToggle onClick={() => setMenuOpen(!menuOpen)}>
          {langLabel} <Text as="span">{lang}</Text> <FaCaretDown />
        </S.DropdownToggle>
        {menuOpen && (
          <S.DropdownMenu>
            <S.DropdownItem onClick={() => handleClick(0)}>
              {options[0].label} <Text as="span">{options[0].value}</Text>
            </S.DropdownItem>
            <S.DropdownItem onClick={() => handleClick(1)}>
              {options[1].label}
              <Text as="span">{options[1].value}</Text>
            </S.DropdownItem>
            <S.DropdownItem onClick={() => handleClick(2)}>
              {options[2].label}
              <Text as="span">{options[2].value}</Text>
            </S.DropdownItem>
          </S.DropdownMenu>
        )}
      </S.DropdownContainer>
    </div>
  )
}
