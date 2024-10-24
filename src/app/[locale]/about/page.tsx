'use client'

import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa6'
import Image from 'next/image'

import * as S from './styles'

import Banner from '@/Components/Banner'
import ValuesCompany from '@/Components/Cards/CardValuesCompany'
import { Title, Text, LinkItem } from '@/Components/Typography'
import Carousel from '@/Components/Carousel'

const About = () => {
  return (
    <>
      <Banner urlImage="/image/banner_about.jpg"></Banner>
      <S.AboutSection>
        <div className="container">
          <Title as="h3">Who We Are</Title>
          <Title as="h2">
            Empowering Businesses Through Human-Centered IT Solutions
          </Title>
          <Text as="p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            tempore corporis tenetur vel! Exercitationem velit maiores eaque
            eveniet voluptates reprehenderit doloremque! Asperiores, atque
            repudiandae. Fugiat aperiam corporis iusto amet eum. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Sint tempore corporis
            tenetur vel! Exercitationem velit maiores eaque eveniet voluptates
            reprehenderit doloremque! Asperiores, atque repudiandae. Fugiat
            aperiam corporis iusto amet eum. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Sint tempore corporis tenetur vel!
            Exercitationem velit maiores eaque eveniet voluptates reprehenderit
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            tempore corporis tenetur vel! Exercitationem velit maiores eaque
            eveniet voluptates reprehenderit doloremque! Asperiores, atque
            repudiandae. Fugiat aperiam corporis iusto amet eum. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Sint tempore corporis
            tenetur vel! Exercitationem velit maiores eaque eveniet voluptates
            reprehenderit doloremque! Asperiores, atque repudiandae. Fugiat
            aperiam corporis iusto amet eum. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Sint tempore corporis tenetur vel!
            Exercitationem velit maiores eaque eveniet voluptates reprehenderit
          </Text>
          <S.ContainerFlex>
            <S.ImageContainer>
              <Image
                src="/image/banner_about.jpg"
                alt="test"
                width={600}
                height={400}
                priority
              />
            </S.ImageContainer>
            <div>
              <Text as="p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                tempore corporis tenetur vel! Exercitationem velit maiores eaque
                eveniet voluptates reprehenderit doloremque! Asperiores, atque
                repudiandae. Fugiat aperiam corporis iusto amet eum. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Sint tempore
                corporis tenetur vel! Exercitationem velit maiores eaque eveniet
                voluptates reprehenderit doloremque! Asperiores, atque
                repudiandae. Fugiat aperiam corporis iusto amet eum. Lorem
                ipsum!
              </Text>
              <Text as="p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                tempore corporis tenetur vel! Exercitationem velit maiores eaque
                eveniet voluptates reprehenderit doloremque! Asperiores, atque
                repudiandae. Fugiat aperiam corporis iusto amet eum. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Sint tempore
                corporis tenetur vel! Exercitationem velit maiores eaque eveniet
                voluptates reprehenderit doloremque! Asperiores, atque
                repudiandae. Fugiat aperiam corporis iusto amet eum. Lorem ipsum
                dolor sit.
              </Text>
            </div>
          </S.ContainerFlex>
        </div>
      </S.AboutSection>
      <S.ValueSection>
        <div className="container">
          <Title as="h3" colorTitle="g">
            Our values
          </Title>
          <Title as="h2">
            Core Values That Drive Results for Your Business
          </Title>
          <ul>
            <li>
              <ValuesCompany
                title="Mission"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempore corporis tenetur vel! Exercitationem velit maiores eaque eveniet voluptates reprehenderit doloremque! Asperiores, atque repudiandae. Fugiat aperiam corporis iusto amet eum"
              >
                {<FaBullseye />}
              </ValuesCompany>
            </li>
            <li className="center-heigh">
              <ValuesCompany
                title="Vision"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempore corporis tenetur vel! Exercitationem velit maiores eaque eveniet voluptates reprehenderit doloremque! Asperiores, atque repudiandae. Fugiat aperiam corporis iusto amet eum"
              >
                {<FaHandshake />}
              </ValuesCompany>
            </li>
            <li>
              <ValuesCompany
                title="Values"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempore corporis tenetur vel! Exercitationem velit maiores eaque eveniet voluptates reprehenderit doloremque! Asperiores, atque repudiandae. Fugiat aperiam corporis iusto amet eum"
              >
                {<FaEye />}
              </ValuesCompany>
            </li>
          </ul>
        </div>
      </S.ValueSection>
      <S.SectionCostumers>
        <div className="container ">
          <div>
            <Title colorTitle="g" as="h3">
              Our Costumers
            </Title>
            <Title as="h2">
              "Trusted by Leading Businesses Worldwide"/
              <br />
              Trusted by Businesses That Value People
            </Title>
            <Carousel />
          </div>
        </div>
      </S.SectionCostumers>
      <S.WhyChooseUs>
        <div className="container">
          <div>
            <Title as="h2">Why Businesses Rely on Us for IT Innovation</Title>
            <S.ContainerFlex>
              <S.ImageContainer>
                <Image
                  src="/image/banner_about.jpg"
                  alt="test"
                  width={600}
                  height={400}
                />
              </S.ImageContainer>
              <div>
                <Text as="p">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  tempore corporis tenetur vel! Exercitationem velit maiores
                  eaque eveniet voluptates reprehenderit doloremque! Asperiores,
                  atque repudiandae. Fugiat aperiam corporis iusto amet eum.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  eaque eveniet voluptates reprehenderit doloremque! Asperiores,
                  atque repudiandae. Fugiat aperiam corporis iusto amet eum.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                </Text>
                <Text as="p">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  tempore corporis tenetur vel! Exercitationem velit maiores
                  eaque eveniet voluptates reprehenderit doloremque! Asperiores,
                  atque repudiandae. Fugiat aperiam corporis iusto amet eum.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  atque repudiandae. Fugiat aperiam corporis iusto amet eum.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                </Text>
                <LinkItem href="/">Discover Our Services</LinkItem>
              </div>
            </S.ContainerFlex>
          </div>
        </div>
      </S.WhyChooseUs>
    </>
  )
}

export default About
