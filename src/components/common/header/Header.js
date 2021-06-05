import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { mqw } from 'styles/mq';
import { ReactComponent as BuxLogo } from 'img/bux-logo.svg';
import Container from 'components/common/container';

const HeaderTag = styled.header`
  background: ${(props) => props.theme.palette.secondary};
`;

const HeaderWrapper = styled(Container)(
  mqw({
    position: 'relative',
    padding: '30px 15px',
    flexDirection: ['column', 'row', 'row'],
  }),
);

const Logo = styled(BuxLogo)(
  mqw({
    height: 40,
  }),
);

const Start = styled(FontAwesomeIcon)(
  mqw({
    position: 'absolute',
    right: ['15px', '20px', 0],
    fontSize: 26,
    cursor: 'pointer',
  }),
);

function Header() {
  return (
    <HeaderTag>
      <HeaderWrapper>
        <Logo />
        <Start icon={faStar} alt="Favorites" />
      </HeaderWrapper>
    </HeaderTag>
  );
}

export default Header;
