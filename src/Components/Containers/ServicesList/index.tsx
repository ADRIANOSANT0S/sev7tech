import * as S from './styles'

type Props = {
  children: React.ReactNode
}

const ServiceList = ({ children }: Props) => {
  return <S.ServiceListContainer>{children}</S.ServiceListContainer>
}

export default ServiceList
