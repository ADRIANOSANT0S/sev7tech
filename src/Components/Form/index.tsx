import { useTranslations } from 'next-intl'

import ButtonSubmit from '../Buttons/ButtonSubmit'
import { LinkItem } from '../Typography'
import * as S from './styles'

const ContactForm = () => {
  const t = useTranslations('Form')

  return (
    <S.FormContainer>
      <S.InputGroupFlex>
        <S.InputGroup>
          <label htmlFor="firstName">{t('firstName')}*</label>
          <input type="text" name="firstName" id="firstName" />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="lastName">{t('lastName')}*</label>
          <input type="text" name="lastName" id="lastName" />
        </S.InputGroup>
      </S.InputGroupFlex>
      <S.InputGroup>
        <label htmlFor="phone">{t('phone')}*</label>
        <input type="text" name="phone" id="phone" />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="email">{t('email')}*</label>
        <input type="email" name="email" id="email" />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="message">{t('message')}*</label>
        <textarea name="message" id="message" />
      </S.InputGroup>
      <S.InputGroupTerms>
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">
          {t('terms')}
          <LinkItem href="/">{t('privacyPolicy')}</LinkItem>
        </label>
      </S.InputGroupTerms>
      <ButtonSubmit />
    </S.FormContainer>
  )
}

export default ContactForm
