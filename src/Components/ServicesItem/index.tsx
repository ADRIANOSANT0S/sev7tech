import Image from 'next/image'
import { MdStar } from 'react-icons/md'

import { LinkItem, Text, Title } from '../Typography'
import * as S from './styles'

export interface ServicesInfos {
  id?: number
  imagUrl: string
  imagDescription: string
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
  benefit: string[]
}

const ServiceItem = ({
  imagUrl,
  imagDescription,
  text1,
  text2,
  text3,
  text4,
  text5,
  benefit
}: ServicesInfos) => {
  return (
    <S.ServiceItemContainer>
      <div>
        <Image src={imagUrl} alt={imagDescription} width={832} height={480} />
      </div>
      <S.ServiceDetails>
        <Title as="h2">Details</Title>
        <Text as="p">{text1}</Text>
        <Text as="p">{text2}</Text>
        <Text as="p">{text3}</Text>
      </S.ServiceDetails>
      <S.ServiceBenefits>
        <Title as="h2">Benefits</Title>
        <ul>
          {benefit.map((item, index) => (
            <li key={index}>
              <MdStar size={16} />{' '}
              <strong>
                <Text as="span">{item}</Text>
              </strong>
            </li>
          ))}
        </ul>
        <Text as="p">{text4}</Text>
      </S.ServiceBenefits>
      <S.ServiceDifference>
        <Title as="h2">TITLE afajdflkj</Title>
        <Text as="p">{text5}</Text>
        <LinkItem href="/Contact">CTA</LinkItem>
      </S.ServiceDifference>
    </S.ServiceItemContainer>
  )
}

export default ServiceItem
