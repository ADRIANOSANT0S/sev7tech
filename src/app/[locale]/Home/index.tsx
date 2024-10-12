'use client'

import {
  FaChartBar,
  FaChartLine,
  FaCogs,
  FaDatabase,
  FaShoppingCart,
  FaTools
} from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa6'
import Image from 'next/image'
import { IoMdColorPalette } from 'react-icons/io'
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2'
import { MdGroups } from 'react-icons/md'

import * as S from './styles'

import Banner from '@/Components/Banner'
import { Title, Text } from '@/Components/Typography'
import ButtonCallAction from '@/Components/Buttons/ButtonAction'
import CardInfos from '@/Components/Cards/CardIfos'

const Home = () => {
  return (
    <>
      <Banner url="https://i.pinimg.com/originals/ca/fc/98/cafc985ad496c996f7cf57767559894e.jpg">
        <S.ChildrenBanner className="container">
          <div>
            <Title as="h1">Make The Easiest Solution For You</Title>
            <Text as="p" size="normal">
              Consectetur adipiscing elit Aenean scelerisque at augue vitae
              consequat quisque eget congue velit in cursus leo Sed sodales
            </Text>
            <ButtonCallAction>Solicitar orçamento</ButtonCallAction>
          </div>
          <Image src="/image/test.jpg" alt="Text" width={600} height={380} />
        </S.ChildrenBanner>
      </Banner>
      //services
      <S.SectionCards>
        <div className="container">
          <S.ServicesBlock>
            <div>
              <Title as="h3">Services</Title>
              <Title as="h2">Services We Offer</Title>
            </div>
            <button>See All Services</button>
          </S.ServicesBlock>
          <S.CardList>
            <li>
              <CardInfos
                title="Development of Custom Websites"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/web-develope.jpg"
              >
                <FaLaptopCode width={40} height={40} />
              </CardInfos>
            </li>
            <li>
              <CardInfos
                title="Exclusive Design and Visual Identity"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/design.png"
              >
                <IoMdColorPalette width={40} height={40} />
              </CardInfos>
            </li>
            <li>
              <CardInfos
                title="Custom Application Solutions"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/app-development.png"
              >
                <HiMiniDevicePhoneMobile width={40} height={40} />
              </CardInfos>
            </li>
            <li>
              <CardInfos
                title="Advanced Database Management"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/database.png"
              >
                <FaDatabase width={40} height={40} />
              </CardInfos>
            </li>
            <li>
              <CardInfos
                title="Custom ERP Development for Companies"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/erp.svg"
              >
                <FaChartBar width={40} height={40} />
              </CardInfos>
            </li>
            <li>
              <CardInfos
                title="Tailored E-commerce"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/e-commerce.png"
              >
                <FaShoppingCart width={40} height={40} />
              </CardInfos>
            </li>
            <li>
              <CardInfos
                title="Proactive Maintenance and Specialized Technical Support"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/maintenance.png"
              >
                <FaTools width={40} height={40} />
              </CardInfos>
            </li>
            <li>
              <CardInfos
                title="Intelligent Automation for Business Processes"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/web-develope.jpg"
              >
                <FaCogs width={40} height={40} />
              </CardInfos>
            </li>
          </S.CardList>
        </div>
      </S.SectionCards>
      <S.SectionAbout>
        <div className="container container-flex">
          <S.ImageContainer>
            <Image
              src="/image/services_image/web-develope.jpg"
              alt="Team Sev7 Tech"
              width={800}
              height={640}
            />
          </S.ImageContainer>
          <div>
            <div>
              <Title as="h3">About Our Company</Title>
              <Title as="h2">
                Transforming Your Business with Tailored Digital Solutions and
                Expert Services
              </Title>
              <Text as="p">
                It is a long established fact that a reader will be distracted
                the readable content of a page when looking at layout the point
                of using lorem the is Ipsum less normal.
              </Text>
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
            <div>
              <button>See all</button>
              <div>
                <div>
                  <Image src="" alt="Owner Business" width={56} height={56} />
                </div>
                <Title as="h4">Adriano Santos</Title>
              </div>
            </div>
          </div>
        </div>
      </S.SectionAbout>
    </>
  )
}

export default Home
