import { MdColorLens } from 'react-icons/md'

import * as S from './styles'

import { Title, CustomText, LinkItem } from '@/Components/Typography'

export type Props = {
  url: string
  title: string
  details: string
  goTo: string
  children: React.ReactNode
}

const CardImage = ({ url, title, details, goTo, children }: Props) => {
  return (
    <S.BgImage url={url}>
      <div>
        <MdColorLens size={40} />
        <Title as="h4">{title}</Title>
        <CustomText as="span">{details}</CustomText>
        <LinkItem href={goTo}>Read more</LinkItem>
      </div>
      <S.Description>
        {children}
        <Title as="h3">{title}</Title>
      </S.Description>
    </S.BgImage>
  )
}

export default CardImage
