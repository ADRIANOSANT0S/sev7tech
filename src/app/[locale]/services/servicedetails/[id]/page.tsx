import * as S from '../styles'

import { servicesData } from '@/data/servicesData'
import Banner from '@/Components/Banner'
import NavigationServices, {
  ServicesLink
} from '@/Components/NavigationServices'
import ServiceItem from '@/Components/ServicesItem'
import { CustomText } from '@/Components/Typography'

const ServicesOffer = ({ params }: { params: { id: string } }) => {
  const service = servicesData.find((s) => s.id === params.id)

  const servicerLinks: ServicesLink[] = [
    {
      id: 1,
      children: 'Web develop',
      url: '/servicesoffer/servicedetails/1'
    },
    {
      id: 2,
      children: 'Design UI/UX',
      url: '/servicesoffer/servicedetails/2'
    },
    {
      id: 3,
      children: 'E-commerce Develop',
      url: '/servicesoffer/servicedetails/3'
    },
    {
      id: 4,
      children: 'Process Automation',
      url: '/servicesoffer/servicedetails/4'
    },
    {
      id: 5,
      children: 'ERP Custom',
      url: '/servicesoffer/servicedetails/5'
    },
    {
      id: 6,
      children: 'UP Date Application',
      url: '/servicesoffer/servicedetails/6'
    }
  ]

  return (
    <>
      {service ? (
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
              <NavigationServices
                links={servicerLinks}
                activeId={Number(params.id)}
              />
            </div>
          </S.ServicesContainer>
        </>
      ) : (
        <CustomText as="p">Services not found</CustomText>
      )}
    </>
  )
}

export default ServicesOffer
