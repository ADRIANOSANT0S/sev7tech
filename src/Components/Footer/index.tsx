import Image from 'next/image'
import { LuChevronsRight } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineAccessTime, MdOutlineMail } from 'react-icons/md'

import { LinkItem, Text, Title } from '../Typography'
import * as S from './styles'

export const Footer = () => {
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
          <Title as="h3">IT Solution</Title>
          <ul>
            <li>
              <LinkItem href="/">
                <LuChevronsRight />
                SEO Optimization
              </LinkItem>
            </li>
            <li>
              <LinkItem href="/">
                <LuChevronsRight />
                Web Development
              </LinkItem>
            </li>
            <li>
              <LinkItem href="/">
                <LuChevronsRight />
                Web Design
              </LinkItem>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <Title as="h3">Contact Us</Title>
            <div>
              <Title as="h4">Opening Hours:</Title>
              <MdOutlineAccessTime />{' '}
              <Text as="span">Mon-Sat: 12.00 PM - 7.00 PM</Text>
            </div>
          </div>
          <div>
            <div>
              <Title as="h4">Contacts:</Title>
              <ul>
                <li>
                  <FaWhatsapp />
                  <Text as="span">(11) 9 4076-3490</Text>
                </li>
                <li>
                  <MdOutlineMail />
                  <Text as="span">company@hotmail.com.br</Text>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-flex">
        <Text as="p">&copy; All copyright {currentYear} by Sev7Tech </Text>
        <ul className="container-flex">
          <li>
            <LinkItem href="/">Terms & Condition</LinkItem>
          </li>
          <li>
            <LinkItem href="/">Privacy Policy</LinkItem>
          </li>
        </ul>
      </div>
    </S.FooterContainer>
  )
}

export default Footer
