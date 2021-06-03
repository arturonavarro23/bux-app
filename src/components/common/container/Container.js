import styled from '@emotion/styled';
import { mqw } from 'styles/mq';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px 15px 15px;
  ${mqw({
    width: ['unset', '720px', '940px', '1090px'],
  })}
`;

export default Container;
