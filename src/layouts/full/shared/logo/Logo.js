import { Link } from 'react-router-dom';
import { ReactComponent as LogoDark } from 'src/assets/images/logos/games_logo.svg';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  paddingTop : '30px',
  paddingLeft : '10px',
  width: '180px',
  display: 'block',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <LogoDark height={30} />
    </LinkStyled>
  )
};

export default Logo;
