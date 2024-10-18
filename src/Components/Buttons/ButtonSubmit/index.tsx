import { useTranslations } from 'next-intl'

import * as S from './styles'

type Props = {
  onClink?: () => void
}

const ButtonSubmit = ({ onClink }: Props) => {
  const t = useTranslations('ButtonLinkTexts.buttonSubmit')

  return (
    <S.ButtonContainer title={t('title')} onClick={onClink}>
      {t('content')}
    </S.ButtonContainer>
  )
}

export default ButtonSubmit
