import { useTranslations } from 'next-intl'
import { BiSolidTimeFive } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'
import React from 'react'

import * as S from './styles'

import Banner from '@/Components/Banner'
import ContactForm from '@/Components/Form'
import { Title, Text } from '@/Components/Typography'
import CardContactData from '@/Components/Cards/CardContactData'

interface ContactInformation {
  id: number
  icon: React.ReactElement
  linkTitle: string
  text: string
  goTo: string
}

const Contact = () => {
  const t = useTranslations('Contact')

  const contactData: ContactInformation[] = [
    {
      id: 1,
      icon: <BiSolidTimeFive />,
      linkTitle: t('linkTitle1'),
      text: t('openingDay'),
      goTo: '/'
    },
    {
      id: 2,
      icon: <RiWhatsappFill />,
      linkTitle: t('linkTitle2'),
      text: '(11) 9 4076-3490',
      goTo: '/'
    },
    {
      id: 3,
      icon: <MdEmail />,
      linkTitle: t('linkTitle3'),
      text: 'company@hotmail.com.br',
      goTo: '/'
    }
  ]

  return (
    <>
      <Banner urlImage="/image/banner.jpg"></Banner>
      <S.ContactContainer>
        <div className="container">
          <Title as="h3">{t('contact')}</Title>
          <Title as="h2">{t('contactUs')}</Title>
          <div className="container-flex">
            <div>
              <ContactForm />
            </div>
            <S.ContactInfos>
              <Title as="h2">{t('contactInformation')}</Title>
              <Text as="p">{t('description')}</Text>
              <ul>
                {contactData.map((data) => (
                  <li key={data.id}>
                    <CardContactData
                      title={data.linkTitle}
                      details={data.text}
                      href={data.goTo}
                    >
                      {data.icon}
                    </CardContactData>
                  </li>
                ))}
              </ul>
            </S.ContactInfos>
          </div>
        </div>
      </S.ContactContainer>
    </>
  )
}
export default Contact
