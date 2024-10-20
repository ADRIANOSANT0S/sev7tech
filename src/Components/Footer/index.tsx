import Image from 'next/image'
import { LuChevronsRight } from 'react-icons/lu'
import { MdEmail } from 'react-icons/md'
import { useTranslations } from 'next-intl'
import { RiWhatsappFill } from 'react-icons/ri'
import { BiSolidTimeFive } from 'react-icons/bi'

import { LinkItem, Text, Title } from '../Typography'
import * as S from './styles'

export const Footer = () => {
  const t = useTranslations('Footer')

  // Get current year
  const currentYear = new Date().getFullYear()

  return (
    <S.FooterContainer>
      <div className="container container-flex">
        <div>
          <Image
            src="/image/star.png"
            alt="Image test size logo"
            width={200}
            height={48}
          />
          <Text as="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vel
            harum porro nesciunt ipsa sapiente aliquam fugit odit,
            reprehenderit, minima pariatur ullam rerum sit dicta numquam veniam
            doloribus accusamus assumenda!
          </Text>
        </div>
        <div>
          <Title as="h3">{t('itSolution')}</Title>
          <ul>
            <li>
              <LuChevronsRight />
              <LinkItem href="/">{t('seoOptimization')}</LinkItem>
            </li>
            <li>
              <LuChevronsRight />
              <LinkItem href="/">{t('webDevelopment')}</LinkItem>
            </li>
            <li>
              <LuChevronsRight />
              <LinkItem href="/">{t('webDesign')}</LinkItem>
            </li>
          </ul>
        </div>
        <div>
          <Title as="h3">{t('quickLink')}</Title>
          <ul>
            <li>
              <LuChevronsRight />
              <LinkItem href="/">{t('aboutSev7Tech')}</LinkItem>
            </li>
            <li>
              <LuChevronsRight />
              <LinkItem href="/">{t('ourServices')}</LinkItem>
            </li>
            <li>
              <LuChevronsRight />
              <LinkItem href="/">{t('ourProjects')}</LinkItem>
            </li>
            <li>
              <LuChevronsRight />
              <LinkItem href="/">{t('ourProducts')}</LinkItem>
            </li>
          </ul>
        </div>
        <div>
          <Title as="h3">{t('contactUs')}</Title>
          <address>
            <div>
              <div>
                <ul>
                  <li>
                    <Title as="h4">{t('openingHours')}</Title>
                  </li>
                  <li>
                    <BiSolidTimeFive />
                    <Text as="span">{t('openingDay')}</Text>
                  </li>
                  <li>
                    <Title as="h4">{t('contacts')}</Title>
                  </li>
                  <li>
                    <RiWhatsappFill />
                    <Text as="span">(11) 9 4076-3490</Text>
                  </li>
                  <li>
                    <MdEmail />
                    <Text as="span">company@hotmail.com.br</Text>
                  </li>
                </ul>
              </div>
            </div>
          </address>
        </div>
      </div>
      <div className="container container-flex">
        <Text as="p">{t('copyright', { currentYear })}</Text>
        <ul className="container-flex">
          <li>
            <LinkItem href="/">{t('terms')}</LinkItem>
          </li>
          <li>
            <LinkItem href="/">{t('privacy')}</LinkItem>
          </li>
        </ul>
      </div>
    </S.FooterContainer>
  )
}

export default Footer
