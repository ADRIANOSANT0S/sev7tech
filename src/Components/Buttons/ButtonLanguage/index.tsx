'use client'

import React, { useState } from 'react'
import Select from 'react-select'

interface LanguageOption {
  value: string
  label: string
  img: string
}

const options: LanguageOption[] = [
  { value: 'pt', label: 'PT', img: '/image/brazil.png' },
  { value: 'en', label: 'EN', img: '/image/USA.png' },
  { value: 'es', label: 'ES', img: '/image/Spenish.png' }
]

const LanguageDropdown: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageOption | null>(null)

  const handleChange = (selectedOption: LanguageOption | null) => {
    setSelectedLanguage(selectedOption)
  }

  const formatOptionLabel = ({ img, label }: LanguageOption) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={img}
        alt={label}
        style={{ width: 20, height: 20, marginRight: 10 }}
      />
      {label}
    </div>
  )

  return (
    <Select
      value={selectedLanguage}
      onChange={handleChange}
      options={options}
      formatOptionLabel={formatOptionLabel}
    />
  )
}

export default LanguageDropdown
