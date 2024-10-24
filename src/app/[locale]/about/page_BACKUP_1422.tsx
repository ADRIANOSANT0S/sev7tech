'use client'

import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa6'

import * as S from './styles'

import Banner from '@/Components/Banner'
<<<<<<< HEAD
import ValuesCompany from '@/Components/Cards/CardValuesCompany'
import { Title, CustomText } from '@/Components/Typography'
=======
import ValuesCompany from '@/Components/Cards/ValuesCompany'
import { Title, Text } from '@/Components/Typography'
>>>>>>> feature/services
import Carousel from '@/Components/Carousel'

const About = () => {
  return (
    <>
      <Banner urlImage="/image/banner_about.jpg"></Banner>
      <S.AboutSection>
        <div className="container">
          <Title as="h3">Who We Are</Title>
          <Title as="h2">
            Ensuring Your Success Through Reliable IT Solutions
          </Title>
          <CustomText as="p">
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
            doloremque! Asperiores, atque repudiandae. Fugiat aperiam corporis
            iusto amet eum. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Sint tempore corporis tenetur vel! Exercitationem velit
            maiores eaque eveniet voluptates reprehenderit doloremque!
            Asperiores, atque repudiandae. Fugiat aperiam corporis iusto amet
            eum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            tempore corporis tenetur vel! Exercitationem velit maiores eaque
            eveniet voluptates reprehenderit doloremque! Asperiores, atque
            repudiandae. Fugiat aperiam corporis iusto amet eum. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Sint tempore corporis
            tenetur vel! Exercitationem velit maiores eaque eveniet voluptates
            reprehenderit doloremque! Asperiores, atque repudiandae. Fugiat
            aperiam corporis iusto amet eum.
          </CustomText>
          <CustomText as="p">
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
            doloremque! Asperiores, atque repudiandae. Fugiat aperiam corporis
            iusto amet eum. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Sint tempore corporis tenetur vel! Exercitationem velit
            maiores eaque eveniet voluptates reprehenderit doloremque!
            Asperiores, atque repudiandae. Fugiat aperiam corporis iusto amet
            eum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            tempore corporis tenetur vel! Exercitationem velit maiores eaque
            eveniet voluptates reprehenderit doloremque! Asperiores, atque
            repudiandae. Fugiat aperiam corporis iusto amet eum. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Sint tempore corporis
            tenetur vel! Exercitationem velit maiores eaque eveniet voluptates
            reprehenderit doloremque! Asperiores, atque repudiandae. Fugiat
            aperiam corporis iusto amet eum.
          </CustomText>
        </div>
      </S.AboutSection>
      <S.ValueSection>
        <div className="container">
          <Title as="h3" colorTitle="g">
            Our values
          </Title>
          <Title as="h2">
            adsfjasdflhka jsdfkjhasdfçlkans dfçlajksn df çlkasndfça
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
            <Title as="h2">What our Costumers say about We</Title>
            <Carousel />
          </div>
        </div>
      </S.SectionCostumers>
      <section>
        <div className="container">
          <div>
            <Title as="h2">Nosso diferencial</Title>
            <CustomText as="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quae perferendis asperiores quia corrupti voluptatem
              autem ipsa. Iure perferendis dolore eos culpa repellat optio
              magnam, a voluptatem explicabo ut perspiciatis.
            </CustomText>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
