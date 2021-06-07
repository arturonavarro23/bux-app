import styled from '@emotion/styled';
import { mqw } from 'styles/mq';

export const ProfileContent = styled.div((props) =>
  mqw({
    fontSize: ['0.825rem', '1rem'],
    lineHeight: props.theme.typography.lineHeight,
    paddingBottom: ['20px', '20px', 0],
    '& .content': {
      display: 'flex',
      flexDirection: ['column', 'row'],
      justifyContent: ['flex-start', 'space-between'],
      '&__item': {
        width: ['100%', '45%'],
        marginRight: [0, '15px'],
      },
    },
    '& span, small': {
      display: 'block',
    },
    '& small': {
      fontWeight: 600,
      color: props.theme.palette.grey,
    },
    '& svg': {
      marginRight: 5,
    },
    '& a': {
      color: props.theme.palette.info,
      fontWeight: 600,
      textDecoration: 'none',
    },
  }),
);
