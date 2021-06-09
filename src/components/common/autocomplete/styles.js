import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mqw } from 'styles/mq';

export const AutocompleteWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.palette.white};
  border: solid 1px ${(props) => props.theme.palette.lighterGrey};
  border-radius: 6px;
  width: 100%;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.palette.lighterGrey};
`;

export const Input = styled.input`
  border-radius: 6px;
  padding: 10px 15px;
  border: 0;
  outline: none;
  width: calc(100% - 60px);
`;

export const OptionsWrapper = styled.div((props) =>
  mqw({
    background: props.theme.palette.white,
    position: 'absolute',
    boxShadow:
      '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    borderBottomRightRadius: [0, 6],
    borderBottomLeftRadius: [0, 6],
    fontSize: '0.9rem',
    maxHeight: '20vh',
    overflowY: 'auto',
    '& .options': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      '&__item': {
        cursor: 'pointer',
        borderBottom: `solid 1px ${props.theme.palette.lightGrey}`,
        padding: '10px 15px',
        '&--active, &:hover': {
          backgroundColor: props.theme.palette.lightGrey,
        },
      },
      '&__no-items': {
        padding: '10px 15px',
      },
    },
  }),
);
