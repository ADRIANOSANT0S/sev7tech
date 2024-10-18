import * as S from './styles'
export type Props = {
  urlImage: string
  children?: React.ReactNode
}
const Banner = ({ urlImage, children }: Props) => {
  return (
    <S.BannerContainer style={{ backgroundImage: `url(${urlImage})` }}>
      <div className="container">{children}</div>
    </S.BannerContainer>
  )
}

export default Banner
