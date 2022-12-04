import { 
  Container,
  Brand,
  Menu,
  Wrapper,
  UserAvatar,
  NavHelpIcon,
  NavSchedulerIcon,
  NavNotifyIcon,
  NavMessageIcon,
  NavDarkModeIcon,
  NavLightModeIcon
} from './styles';

interface NavBarProps {
  isDarkTheme: boolean;
  changeTheme: (theme: boolean) => void;
}

export const Navbar = ({ isDarkTheme = false, changeTheme }: NavBarProps) => {
  return (
    <Container>
      <Wrapper>
        <Brand src="/images/brand.png" alt="Cambly Brand" />
        <Menu>
          <span>Professores</span>
          <span>Currículos</span>
          <span>Progresso</span>
        </Menu>
      </Wrapper>
      <Wrapper>
        {isDarkTheme ? 
        <NavLightModeIcon
          onClick={() => changeTheme(!isDarkTheme)}
        /> 
        : <NavDarkModeIcon
          onClick={() => changeTheme(!isDarkTheme)}
        />}
        <NavMessageIcon />
        <NavNotifyIcon />
        <NavSchedulerIcon />
        <NavHelpIcon />
        <UserAvatar src="https://github.com/FilipiRafael.png" alt="User Avatar" />
      </Wrapper>
    </Container>
  )
}