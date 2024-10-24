import Image from 'next/image'

import * as S from './styles'

import { Title, Text, LinkItem } from '@/Components/Typography'

type Props = {
  children: React.ReactNode
  title: string
  description: string
  goTo: string
  urlImg: string
}

const ServiceInfos = ({
  children,
  title,
  description,
  goTo,
  urlImg
}: Props) => {
  return (
    <S.CardInfos>
      <div>
        <S.ImageContainer>
          <Image src={urlImg} alt={title} width={400} height={280} />
        </S.ImageContainer>
        {children}
      </div>
      <S.InfoContainer>
        <Title as="h3">{title}</Title>
        <Text as="p">{description}</Text>
        <LinkItem href={goTo}>Read More</LinkItem>
      </S.InfoContainer>
    </S.CardInfos>
  )
}

export default ServiceInfos
