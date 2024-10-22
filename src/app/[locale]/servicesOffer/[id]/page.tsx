import * as S from '../styles'

import { servicesData } from '@/data/servicesData'
import Banner from '@/Components/Banner'
import NavigationServices from '@/Components/NavigationServices'
import ServiceItem from '@/Components/ServicesItem'
import { Text } from '@/Components/Typography'

const ServicesOffer = ({ params }: { params: { id: string } }) => {
  const serviceId = Number(params.id)
  const service = servicesData.find((s) => s.id === serviceId)

  if (!service) {
    return <Text as="p">Services not found</Text>
  }

  return (
    <>
      <Banner urlImage="/image/banner.jpg" />
      <S.ServicesContainer>
        <div className="container container-flex">
          <ServiceItem
            imagUrl={service.imagUrl}
            imagDescription={service.imagDescription}
            text1={service.text1}
            text2={service.text2}
            text3={service.text3}
            text4={service.text4}
            text5={service.text5}
            benefit={service.benefit}
          />
          <NavigationServices />
        </div>
      </S.ServicesContainer>
    </>
  )
}

export default ServicesOffer
