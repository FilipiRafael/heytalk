import {
  Card,
  Title,
  SubTitle,
  Label,
  Input,
  LoginButton,
  SignUpText
} from './styles'; 

export const SignInCard = () => {
  return (
    <Card>
      <Title>Faça Login</Title>
      <SubTitle>Preencha os campos para acessar sua conta.</SubTitle>

      <Label htmlFor='email'>E-mail</Label>
      <Input type='email' placeholder='Digite o seu e-mail' />

      <Label htmlFor='password'>Senha</Label>
      <Input type='password' placeholder='Digite sua senha' />

      <LoginButton>
        Acessar Conta
      </LoginButton>

      <SignUpText>
        Não tem uma conta?
        Cadastre-se
      </SignUpText>
    </Card>
  )
}