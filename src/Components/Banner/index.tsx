import * as S from './styles'
export type Props = {
  url: string
  children: React.ReactNode
}
const Banner = ({ url, children }: Props) => {
  return (
    <S.SectionBanner url={url}>
      <div className="container">{children}</div>
    </S.SectionBanner>
  )
}

export default Banner
