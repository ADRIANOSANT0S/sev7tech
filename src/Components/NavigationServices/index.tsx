import LinkAside from '../Buttons/ButtonLinkAside'
import { LinkItem } from '../Typography'
import * as S from './styles'

const NavigationServices = () => {
  return (
    <S.NavigationContainer>
      <nav>
        <LinkAside href="/">Link</LinkAside>
        <LinkItem href="/">Link</LinkItem>
        <LinkItem href="/">Link</LinkItem>
        <LinkItem href="/">Link</LinkItem>
        <LinkItem href="/">Link</LinkItem>
        <LinkItem href="/">Link</LinkItem>
        <LinkItem href="/">Link</LinkItem>
        <LinkItem href="/">Link</LinkItem>
      </nav>
    </S.NavigationContainer>
  )
}

export default NavigationServices
