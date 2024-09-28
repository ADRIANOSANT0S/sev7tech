import { MdColorLens } from 'react-icons/md'

import * as S from './styles'

import { Title, Text, LinkItem } from '@/Components/Typography'

export type Props = {
  url: string
}

const CardImage = ({ url }: Props) => {
  return (
    <S.BgImage url={url}>
      <div>
        <MdColorLens size={40} />
        <Title as="h4">Design</Title>
        <Text as="span">
          Lorem ipsum dolor sit amet consectetur, adipi sicing elit. Repel
          lendus consectetur, adipisicing elit. Repellendus voluptates.
        </Text>
        <LinkItem href="/">Read more</LinkItem>
      </div>
      <S.Description>
        <MdColorLens size={40} />
        <Title as="h3">Design</Title>
      </S.Description>
    </S.BgImage>
  )
}

export default CardImage
