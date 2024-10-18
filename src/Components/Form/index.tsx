import ButtonSubmit from '../Buttons/ButtonSubmit'
import { LinkItem } from '../Typography'
import * as S from './styles'

const Contact = () => {
  return (
    <S.FormContainer>
      <S.InputGroupFlex>
        <S.InputGroup>
          <label htmlFor="">Your First Name*</label>
          <input type="text" name="" id="" />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="">Your Last Name*</label>
          <input type="text" name="" id="" />
        </S.InputGroup>
      </S.InputGroupFlex>
      <S.InputGroup>
        <label htmlFor="">Your Phone (WhatsApp)*</label>
        <input type="text" name="" id="" />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="">Your E-mail*</label>
        <input type="email" name="" id="" />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="">Your Message*</label>
        <textarea name="" id="" />
      </S.InputGroup>
      <S.InputGroupTerms>
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">
          I agree to the
          <LinkItem href="/">privacy policy</LinkItem>.
        </label>
      </S.InputGroupTerms>
      <ButtonSubmit>submit</ButtonSubmit>
    </S.FormContainer>
  )
}

export default Contact
