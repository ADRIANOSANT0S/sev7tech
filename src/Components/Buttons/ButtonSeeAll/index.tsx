import { useTranslations } from 'next-intl'

import * as S from './styles'

type Props = {
  href: string
}

const ButtonSeeAll = ({ href }: Props) => {
  const t = useTranslations('ButtonLinkTexts.seeAll')

  return (
    <S.ButtonContainer href={href} title={t('title')}>
      {t('content')}
    </S.ButtonContainer>
  )
}

export default ButtonSeeAll
