import { IoMdColorPalette } from 'react-icons/io'
import {
  FaChartBar,
  FaCogs,
  FaDatabase,
  FaLaptopCode,
  FaShoppingCart,
  FaTools
} from 'react-icons/fa'
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2'

import * as S from './styles'

import ServiceInfos from '@/Components/Cards/ServiceInfos'
import ServiceList from '@/Components/Containers/ServicesList'
import Banner from '@/Components/Banner'
import { textSplit } from '@/utils/stringUtils'

const ServicesOffer = () => {
  return (
    <>
      <Banner urlImage="/image/banner.jpg"></Banner>
      <S.ServiceDetailsContainer>
        <div className="container">
          <ServiceList>
            <li>
              <ServiceInfos
                title="Development of Custom Websites"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/services/service-details/1"
                urlImg="/image/services_image/web-develope.jpg"
              >
                <FaLaptopCode width={40} height={40} />
              </ServiceInfos>
            </li>
            <li>
              <ServiceInfos
                title="Exclusive and Customized UI/UX Design for Your Business"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/services/service-details/2"
                urlImg="/image/services_image/design.png"
              >
                <IoMdColorPalette width={40} height={40} />
              </ServiceInfos>
            </li>
            <li>
              <ServiceInfos
                title="Custom Application Solutions"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/services/service-details/3"
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
            <li>
              <ServiceInfos
                title="Proactive Maintenance and Specialized Technical Support"
                description={textSplit(
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis.',
                  110
                )}
                goTo="/"
                urlImg="/image/services_image/maintenance.png"
              >
                <FaTools width={40} height={40} />
              </ServiceInfos>
            </li>
            <li>
              <ServiceInfos
                title="Intelligent Automation for Business Processes"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque veritatis fuga neque accusamus, iure, sit soluta  ex delectus officiis perferendis ex delectus officiis perferendis."
                goTo="/"
                urlImg="/image/services_image/automation.jpg"
              >
                <FaCogs width={40} height={40} />
              </ServiceInfos>
            </li>
          </ServiceList>
        </div>
      </S.ServiceDetailsContainer>
    </>
  )
}

export default ServicesOffer
