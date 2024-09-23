'use client'

import * as S from './styles'

type Prop = {
  onClick: () => void
  isChecked: boolean
}

const Switch = ({ onClick, isChecked }: Prop) => {
  return (
    <S.StyledWrapper>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={onClick} />
        <span className="slider" />
      </label>
    </S.StyledWrapper>
  )
}

export default Switch
