import styled from '@emotion/styled';
import { mqw } from 'styles/mq';
import { Modal, Head, Content } from '../modal';

export const FavoritesModalWrapper = styled(Modal)`
  ${mqw({
    borderRadius: [0, 6],
    marginTop: [0, '2rem'],
    width: ['100%', 400],
    height: ['100%', 'auto'],
  })}
`;

export const ModalHead = styled(Head)`
  border-bottom: ${(props) => `solid 1px ${props.theme.palette.lightGrey}`};
  padding: 15px;
  font-size: 1.2rem;
  font-weight: 600;
  position: relative;
  & svg {
    color: ${(props) => props.theme.palette.grey};
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;

export const ModalContent = styled(Content)((props) =>
  mqw({
    borderBottomRightRadius: [0, 6],
    borderBottomLeftRadius: [0, 6],
    fontSize: '0.9rem',
    maxHeight: ['100%', 480],
    overflowY: 'auto',
    '& .favorites': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      '&__item': {
        cursor: 'pointer',
        borderBottom: `solid 1px ${props.theme.palette.lightGrey}`,
        padding: '10px 15px',
        '&:hover': {
          backgroundColor: props.theme.palette.lightGrey,
        },
      },
      '&__no-items': {
        padding: '10px 15px',
      },
    },
  }),
);
