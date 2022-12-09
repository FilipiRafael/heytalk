import {
  Container,
  GitHubIcon,
  InstagramIcon,
  WebIcon,
  LinkedInIcon,
  Link
} from './styles';

export const Footer = () => {
  return (
    <Container>
      <Link href='https://github.com/filipirafael' target='_blank'>
        <GitHubIcon />
      </Link>
      <Link href='https://instagram.com/filipi.rafael.7' target='_blank'>
        <InstagramIcon />
      </Link>
      <Link href='https://www.linkedin.com/in/filipi-rafael-developer' target='_blank'>
        <LinkedInIcon />
      </Link>
      <Link href='https://filipirafael.com' target='_blank'>
        <WebIcon />
      </Link>
    </Container>
  )
}
