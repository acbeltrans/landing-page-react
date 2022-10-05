import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from '../styled/SignIn.styles'

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Ventures Travel</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  )
}

export default SignIn
