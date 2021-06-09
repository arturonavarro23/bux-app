import { createElement } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mqw } from 'styles/mq';
import { ReactComponent as BuxLogo } from 'img/bux-logo.svg';
import { Container } from '../container';

export const HeaderTag = styled.header`
  background: ${(props) => props.theme.palette.secondary};
`;

export const HeaderWrapper = styled(Container)(
  mqw({
    position: 'relative',
    padding: '30px 15px',
    flexDirection: ['column', 'row', 'row'],
  }),
);

export const LogoLink = styled(({ isHomePage, children, ...props }) =>
  createElement(Link, props, children),
)((props) =>
  mqw({
    position: ['static', props.isHomePage ? 'static' : 'absolute'],
    left: 0,
  }),
);

export const Logo = styled(BuxLogo)`
  height: 40px;
`;

export const AutocompleteContainer = styled.div(
  mqw({
    margin: ['2rem 0 0 0', '0 auto'],
    width: '100%',
    maxWidth: ['unset', '50%'],
  }),
);

export const Favorites = styled.div`
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

export const Start = styled(({ active, children, ...props }) =>
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
