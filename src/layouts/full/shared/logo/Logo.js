import { Link } from 'react-router-dom';
import { ReactComponent as LogoDark } from 'src/assets/images/logos/games_logo.svg';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  marginTop : '70px',
  marginBottom : '50px',
  display: 'block',
  justifyContent : 'center',
  alignItems : 'center'
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <LogoDark height={30} />
    </LinkStyled>
  )
};

export default Logo;
