import Image from 'next/image'
import { MdStar } from 'react-icons/md'

import { LinkItem, CustomText, Title } from '../Typography'
import * as S from './styles'

export interface ServicesInfos {
  id?: string
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
        <Title as="h2">Service Details</Title>
        <CustomText as="p">{text1}</CustomText>
        <CustomText as="p">{text2}</CustomText>
        <CustomText as="p">{text3}</CustomText>
      </S.ServiceDetails>
      <S.ServiceBenefits>
        <Title as="h2">Advantages for Your Business</Title>
        <ul>
          {benefit.map((item, index) => (
            <li key={index}>
              <MdStar size={16} />{' '}
              <strong>
                <CustomText as="span">{item}</CustomText>
              </strong>
            </li>
          ))}
        </ul>
        <CustomText as="p">{text4}</CustomText>
      </S.ServiceBenefits>
      <S.ServiceDifference>
        <Title as="h2">Why choose us?</Title>
        <CustomText as="p">{text5}</CustomText>
        <LinkItem href="/Contact">Get in Touch</LinkItem>
      </S.ServiceDifference>
    </S.ServiceItemContainer>
  )
}

export default ServiceItem
