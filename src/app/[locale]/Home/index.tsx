'use client'

import {
  FaChartBar,
  FaChartLine,
  FaDatabase,
  FaShoppingCart
} from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa6'
import Image from 'next/image'
import { IoMdColorPalette } from 'react-icons/io'
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2'
import { MdGroups } from 'react-icons/md'

import * as S from './styles'

import Banner from '@/Components/Banner'
import { Title, CustomText } from '@/Components/Typography'
import ButtonCTA from '@/Components/Buttons/ButtonCTA'
import ServiceInfos from '@/Components/Cards/ServiceInfos'
import Carousel from '@/Components/Carousel'
import Contact from '@/Components/Form'
import ButtonSeeAll from '@/Components/Buttons/ButtonSeeAll'
import ServiceList from '@/Components/Containers/ServicesList'

const Home = () => {
  return (
    <>
      <Banner urlImage="/image/banner.jpg">
        <S.ChildrenBanner className="container">
          <div>
            <Title as="h1">
              Make The Easiest Solution For You Make The Easiest Solution For
              You Solution For You
            </Title>
            <CustomText as="p" size="normal">
              Consectetur adipiscing elit Aenean scelerisque at augue vitae
              consequat quisque eget congue velit in cursus leo Sed sodales
              Consectetur adipiscing elit Aenean scelerisque at augue vitae
              consequat quisque eget congue velit in cursus leo Sed sodales
              Consectetur adipiscing elit Aenean scelerisque at augue vitae
              consequat quisque eget congue velit in cursus leo Sed sodales
              Consectetur adipiscing elit Aenean scelerisque at augue vitae
              consequat quisque eget congue velit in cursus leo Sed sodales
            </CustomText>
            <ButtonCTA href="/" title="Clique aqui para entrar em contato">
              Solicitar orçamento
            </ButtonCTA>
          </div>
        </S.ChildrenBanner>
      </Banner>
      <S.SectionCards>
        <div className="container">
          <S.ServicesBlock>
            <div>
              <Title as="h3" colorTitle="g">
                Services
              </Title>
              <Title as="h2">Services We Offer</Title>
            </div>
            <ButtonSeeAll href="/services" />
          </S.ServicesBlock>
          <ServiceList>
            <li>
              <ServiceInfos
                title="Development of Custom Websites"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/web-develope.jpg"
              >
                <FaLaptopCode width={40} height={40} />
              </ServiceInfos>
            </li>
            <li>
              <ServiceInfos
                title="Exclusive Design and Visual Identity"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/design.png"
              >
                <IoMdColorPalette width={40} height={40} />
              </ServiceInfos>
            </li>
            <li>
              <ServiceInfos
                title="Custom Application Solutions"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/app-development.png"
              >
                <HiMiniDevicePhoneMobile width={40} height={40} />
              </ServiceInfos>
            </li>
            <li>
              <ServiceInfos
                title="Advanced Database Management"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/database.png"
              >
                <FaDatabase width={40} height={40} />
              </ServiceInfos>
            </li>
            <li>
              <ServiceInfos
                title="Custom ERP Development for Companies"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/erp.svg"
              >
                <FaChartBar width={40} height={40} />
              </ServiceInfos>
            </li>
            <li>
              <ServiceInfos
                title="Tailored E-commerce"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/e-commerce.png"
              >
                <FaShoppingCart width={40} height={40} />
              </ServiceInfos>
            </li>
          </ServiceList>
        </div>
      </S.SectionCards>
      <S.SectionAbout>
        <div className="container container-flex">
          <S.ImageContainer>
            <Image
              src="/image/test.jpg"
              alt="Team Sev7 Tech"
              width={648}
              height={560}
            />
          </S.ImageContainer>
          <div>
            <div>
              <Title as="h3" colorTitle="g">
                About Our Company
              </Title>
              <Title as="h2">
                Transforming Your Business with Tailored Digital Solutions and
                Expert Services
              </Title>
              <CustomText as="p">
                It is a long established fact that a reader will be distracted
                the readable content of a page when looking at layout the point
                of using lorem the is Ipsum less normal. It is a long
                established fact that a reader will be distracted the .
              </CustomText>
            </div>
            <ul className="container-flex">
              <li className="container-flex">
                <MdGroups size={40} />
                <Title as="h3">
                  Together, We Bring Ideas to Life and Generate Results
                </Title>
              </li>
              <li className="container-flex">
                <FaChartLine size={40} />
                <Title as="h3">Accelerate the Growth of Your Business</Title>
              </li>
            </ul>
            <S.OwnerBusiness
              title="Adriano"
              href="https://www.linkedin.com/in/adriano-santos-b839201b7"
              passHref={false}
            >
              <div>
                <Image
                  src="/image/test.jpg"
                  alt="Owner Business"
                  width={72}
                  height={72}
                />
              </div>
              <Title as="h4">Adriano Santos</Title>
            </S.OwnerBusiness>
          </div>
        </div>
      </S.SectionAbout>
      <S.SectionCostumers>
        <div className="container ">
          <div>
            <Title colorTitle="g" as="h3">
              Our Costumers
            </Title>
            <Title as="h2">What our Costumers say about We</Title>
          </div>
          <Carousel />
        </div>
      </S.SectionCostumers>
      <S.SectionContact>
        <div className="container container-flex">
          <Contact />
          <div>
            <Title as="h2">TigjhvhjvbbcvbcvbcS</Title>
            <CustomText as="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sed
              commodi? Cupiditate ab, labore necessitatibus fugiat soluta libero
              facilis saepe nobis veniam ipsum, nemo molestias beatae quidem
              reprehenderit inventore pariatur.
            </CustomText>
            <S.ImageContact>
              <Image
                src="/image/contact.jpg"
                alt="Meting"
                width={664}
                height={472}
              />
            </S.ImageContact>
          </div>
        </div>
      </S.SectionContact>
    </>
  )
}

export default Home
