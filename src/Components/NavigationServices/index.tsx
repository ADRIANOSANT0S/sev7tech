import LinkAside from '../Buttons/ButtonLinkAside'
import * as S from './styles'

export interface ServicesLink {
  id: number
  children: string
  url: string
}

type Props = {
  links: ServicesLink[]
  activeId: number
}

const NavigationServices = ({ links, activeId }: Props) => {
  return (
    <S.NavigationContainer>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <LinkAside href={link.url} id={link.id} activeId={activeId}>
                {link.children}
              </LinkAside>
            </li>
          ))}
        </ul>
      </nav>
    </S.NavigationContainer>
  )
}

export default NavigationServices
