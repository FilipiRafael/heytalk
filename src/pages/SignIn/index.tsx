import {
  Container,
  BrandStyled,
  VectorStyled,
} from './styles';

import 'animate.css';

import { SignInCard } from '../../components/SignInCard';

export const SignIn = () => {
  return (
    <Container>
      <BrandStyled src='/images/text-white-brand.svg' alt='Brand' />
      <VectorStyled src='/images/signin-vector.svg' alt='HeyTalk Brand Icon' />
      <SignInCard />
    </Container>
  )
}