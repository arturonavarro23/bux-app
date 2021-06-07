import styled from '@emotion/styled';
import { mqw } from 'styles/mq';
import Container from 'components/common/container';
import { oneOf } from 'prop-types';
import { changeStatus } from 'constants/enums';

export { Container };

export const Content = styled.div`
  display: flex;
  ${mqw({
    flexDirection: ['column-reverse', 'column-reverse', 'row'],
  })}
`;

export const TitleContainer = styled.div`
  color: ${(props) => props.theme.palette.white};
  background: ${(props) => props.theme.palette.secondary};
  margin-bottom: 20px;
  padding: 0 1.875rem 1.875rem;
`;

export const TitleInfo = styled(Container)`
  ${mqw({
    flexDirection: ['column', 'column', 'row'],
    justifyContent: ['flex-start', 'center', 'space-between'],
    alignItems: ['stretch', 'center', 'stretch'],
  })}
`;

export const ProfileContainer = styled.div(
  mqw({
    flex: ['unset', 2, 2, 3],
    paddingRight: ['0', '0', '15px'],
  }),
);

export const QuoteContainer = styled.div(
  mqw({
    flex: ['unset', 2],
  }),
);

export const Title = styled.h1((props) =>
  mqw({
    textAlign: ['left', 'center', 'left'],
    color: props.theme.palette.black,
    fontSize: ['1.375rem', '1.625rem'],
    lineHeight: ['1.5rem', '1.625rem'],
    '& span': {
      fontWeight: '500',
      marginLeft: 5,
    },
    '& small': {
      display: 'block',
      fontSize: '45%',
    },
    '& .favorite': {
      cursor: 'pointer',
      fontSize: '1.25rem',
      margin: '0 0 4px 5px',
      '&.active': {
        color: props.theme.palette.yellow,
      },
    },
  }),
);

function getChangeColor(status, theme) {
  switch (status) {
    case changeStatus.DECREASE:
      return theme.palette.red;
    case changeStatus.INCREMENT:
      return theme.palette.green;
    default:
      return theme.palette.white;
  }
}

export const QuoteSummary = styled.div((props) =>
  mqw({
    color: props.theme.palette.black,
    textAlign: ['left', 'center', 'right'],
    '& .close': {
      fontSize: ['1.375rem', '1.625rem'],
      fontWeight: 600,
      display: 'block',
    },
    '& .change': {
      alignItems: 'center',
      color: getChangeColor(props.changeStatus, props.theme),
      display: 'flex',
      fontWeight: 600,
      fontSize: '1.25rem',
      '& svg': {
        marginRight: 8,
      },
    },
  }),
);

QuoteSummary.propTypes = {
  changeStatus: oneOf(Object.values(changeStatus)).isRequired,
};
