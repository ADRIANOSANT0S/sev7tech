import * as S from './styles'

import { Title, CustomText } from '@/Components/Typography'

type Props = {
  children: React.ReactNode
  title: string
  description: string
}

const ValuesCompany = ({ children, title, description }: Props) => {
  return (
    <S.CardValuerCompany>
      {children}
      <div>
        <Title as="h3">{title}</Title>
        <CustomText as="p">{description}</CustomText>
      </div>
    </S.CardValuerCompany>
  )
}

export default ValuesCompany
