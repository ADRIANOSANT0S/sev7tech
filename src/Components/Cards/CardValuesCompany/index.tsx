import * as S from './styles'

import { Title, Text } from '@/Components/Typography'

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
        <Text as="p">{description}</Text>
      </div>
    </S.CardValuerCompany>
  )
}

export default ValuesCompany
