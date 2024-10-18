import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IoMdColorPalette } from 'react-icons/io'
import dynamic from 'next/dynamic'

import CardInfos from '../Cards/CardInfos'

const Carousel = () => {
  const Slider = dynamic(() => import('react-slick'), { ssr: false })
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Para telas acima de 1024px
        settings: {
          slidesToShow: 2 // Mostrar 2 slides
        }
      },
      {
        breakpoint: 600, // Para telas abaixo de 600px
        settings: {
          slidesToShow: 1 // Mostrar 1 slide
        }
      }
    ]
  }

  return (
    <div className="container">
      <Slider {...settings}>
        <CardInfos
          title="Exclusive Design and Visual Identity"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
          goTo="/"
          urlImg="/image/services_image/design.png"
        >
          <IoMdColorPalette width={40} height={40} />
        </CardInfos>
        <CardInfos
          title="Exclusive Design and Visual Identity"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
          goTo="/"
          urlImg="/image/services_image/design.png"
        >
          <IoMdColorPalette width={40} height={40} />
        </CardInfos>
        <CardInfos
          title="Exclusive Design and Visual Identity"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
          goTo="/"
          urlImg="/image/services_image/design.png"
        >
          <IoMdColorPalette width={40} height={40} />
        </CardInfos>
        <CardInfos
          title="Exclusive Design and Visual Identity"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
          goTo="/"
          urlImg="/image/services_image/design.png"
        >
          <IoMdColorPalette width={40} height={40} />
        </CardInfos>
      </Slider>
    </div>
  )
}

export default Carousel
