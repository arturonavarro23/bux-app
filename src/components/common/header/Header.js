import { createElement } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { mqw } from 'styles/mq';
import { ReactComponent as BuxLogo } from 'img/bux-logo.svg';
import { openModal } from 'store/actions/favorites';
import Container from '../container';

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

const Favorites = styled.div`
  ${mqw({
    cursor: 'pointer',
    position: 'absolute',
    right: ['15px', '20px', 0],
    fontSize: '1.8rem',
    '& span': {
      display: ['none', 'inline'],
    },
    '&:hover': {
      textDecoration: 'underline',
    },
  })}
`;

const Start = styled(({ active, children, ...props }) =>
  createElement(FontAwesomeIcon, props, children),
)((props) =>
  mqw({
    color: props.active
      ? props.theme.palette.yellow
      : props.theme.palette.black,
    cursor: 'pointer',
    marginLeft: 5,
  }),
);

function Header() {
  const dispatch = useDispatch();
  const hasFavorites = useSelector((state) => state.favorites.items.length > 0);

  const onClick = () => {
    dispatch(openModal());
  };

  return (
    <>
      <HeaderTag>
        <HeaderWrapper>
          <Logo />
          <Favorites onClick={onClick}>
            <Start
              active={hasFavorites}
              icon={hasFavorites ? faStar : faStarRegular}
              alt="Favorites"
            />
          </Favorites>
        </HeaderWrapper>
      </HeaderTag>
    </>
  );
}

export default Header;
