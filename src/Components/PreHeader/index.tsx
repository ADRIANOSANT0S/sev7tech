import { FaInstagram, FaFacebook, FaGithub, FaWhatsapp } from 'react-icons/fa'

import { LinkItem, Text } from '../Typography'
import { PreHeaderContainer } from './styles'

const PreHeader = () => {
  return (
    <PreHeaderContainer>
      <div className="container container-flex">
        <LinkItem href="to:+5511949793490" className="container-flex">
          <FaWhatsapp />
          <Text as="span">(11) 9 4076-3490</Text>
        </LinkItem>
        <ul className="container-flex">
          <li>
            <LinkItem href="#">
              <FaInstagram />
            </LinkItem>
          </li>
          <li>
            <LinkItem href="#">
              <FaFacebook />
            </LinkItem>
          </li>
          <li>
            <LinkItem href="#">
              <FaGithub />
            </LinkItem>
          </li>
        </ul>
      </div>
    </PreHeaderContainer>
  )
}

export default PreHeader
