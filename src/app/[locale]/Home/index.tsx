'use client'
import { MdColorLens } from 'react-icons/md'

import * as S from './styles'

import Banner from '@/Components/Banner'
import CardImage from '@/Components/Cards/CardImage'
import { Title, Text } from '@/Components/Typography'

const Home = () => {
  return (
    <>
      <S.BannerSection>
        <Banner url="/image/star.png">
          <div>
            <Title as="h1">Make The Easiest Solution For You</Title>
            <Text as="p">
              Consectetur adipiscing elit Aenean scelerisque at augue vitae
              consequat quisque eget congue velit in cursus leo Sed sodales
            </Text>
          </div>
        </Banner>
      </S.BannerSection>
      <div className="container">
        <section>
          <Title as="h3">FROM OUR CASE studies</Title>
          <Title as="h2">We Delivered Best Solution</Title>
          <CardImage url="/image/star.png">DIV</CardImage>
        </section>
      </div>
    </>
  )
}

export default Home
