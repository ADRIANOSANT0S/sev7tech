'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { usePathname, useRouter } from 'next/navigation'

import * as S from './styles'

import { Text } from '@/Components/Typography'

const ButtonLanguages = () => {
  const router = useRouter()
  const pathname = usePathname()

  const options = useMemo(
    () => [
      {
        value: 'EN',
        label: <S.FlagImage src={'/image/en.png'} alt="EN flag" />
      },
      {
        value: 'PT',
        label: <S.FlagImage src={'/image/pt.png'} alt="PT flag" />
      },
      {
        value: 'ES',
        label: <S.FlagImage src={'/image/es.png'} alt="ES flag" />
      }
    ],
    []
  )

  // Estado inicial definido como nulo para que seja atualizado no useEffect
  const [langLabel, setLangLabel] = useState<React.ReactNode>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Extrai o idioma da URL e define a bandeira correta com base nisso
    const currentLang = pathname.split('/')[1]?.toLowerCase() || 'en'

    // Busca o rótulo de idioma correspondente
    const selectedOption = options.find(
      (option) => option.value.toLowerCase() === currentLang
    )

    if (selectedOption) {
      setLangLabel(selectedOption.label)
    }
  }, [pathname, options]) // Executa sempre que o pathname mudar

  // Render language and close the menu
  function handleClick(n: number) {
    const selectedLang = options[n].value.toLowerCase()
    setLangLabel(options[n].label)
    setMenuOpen(false)

    // Extrai o idioma atual da URL, assumindo que o idioma é o primeiro segmento da URL
    const segments = pathname.split('/').filter(Boolean)

    if (['en', 'pt', 'es'].includes(segments[0])) {
      segments[0] = selectedLang // Substitui o idioma
    } else {
      segments.unshift(selectedLang) // Adiciona o idioma se não estiver presente
    }

    // Reconstrói a URL com o idioma correto
    const newPath = `/${segments.join('/')}`
    router.push(newPath)
  }

  return (
    <div>
      <S.DropdownContainer>
        <S.DropdownToggle onClick={() => setMenuOpen(!menuOpen)}>
          {langLabel}
          <Text as="span">
            {options
              .find(
                (option) =>
                  option.value.toLowerCase() === pathname.split('/')[1]
              )
              ?.value.toUpperCase()}
          </Text>
          <FaCaretDown />
        </S.DropdownToggle>
        {menuOpen && (
          <S.DropdownMenu>
            {options.map((option, index) => (
              <S.DropdownItem
                key={option.value}
                onClick={() => handleClick(index)}
              >
                {option.label}
              </S.DropdownItem>
            ))}
          </S.DropdownMenu>
        )}
      </S.DropdownContainer>
    </div>
  )
}

export default ButtonLanguages
