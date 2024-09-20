import * as S from './styles'

const Switch = () => {
  return (
    <S.StyledWrapper>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider" />
      </label>
    </S.StyledWrapper>
  )
}

export default Switch
