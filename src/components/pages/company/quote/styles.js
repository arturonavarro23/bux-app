import styled from '@emotion/styled';
import { mqw } from 'styles/mq';

export const QuoteWrapper = styled.div((props) =>
  mqw({
    '& .historical': {
      display: 'flex',
      flexDirection: 'row',
      '&__item': {
        width: 'calc(100% / 3)',
        textAlign: 'center',
        '& small': {
          display: 'block',
          fontWeight: 600,
          color: props.theme.palette.grey,
        },
        '& span': {
          display: 'block',
          fontWeight: 600,
          color: props.theme.palette.black,
          fontSize: ['1.8rem', '2rem'],
          margin: '5px 0 15px',
        },
      },
    },
  }),
);
