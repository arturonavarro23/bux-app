import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { mqw } from 'styles/mq';
import { getCompany } from 'store/actions/company';
import { getQuote } from 'store/actions/quote';
import Container from 'components/common/container';

const Content = styled.div`
  display: flex;
  ${mqw({
    flexDirection: ['column', 'column', 'row'],
  })}
`;

const TitleContainer = styled.div`
  color: #fff;
  background: rgb(201, 51, 81);
  background: linear-gradient(
    90deg,
    rgba(201, 51, 81, 1) 22%,
    rgba(255, 60, 100, 0.896796218487395) 59%
  );
  padding: 1.875rem;
`;

const ProfileContainer = styled.div`
  ${mqw({
    flex: ['unset', 2, 2, 3],
  })}
`;
const QuoteContainer = styled.div`
  ${mqw({
    flex: ['unset', 2],
  })}
`;

export function Company() {
  const { symbol } = useParams();
  const dispatch = useDispatch();
  const { company, quote } = useSelector((state) => ({
    company: state.company,
    quote: state.quote,
  }));

  useEffect(() => {
    dispatch(getCompany(symbol));
    dispatch(getQuote(symbol));
  }, [symbol, dispatch]);

  return (
    <>
      <TitleContainer>
        <Container>Content</Container>
      </TitleContainer>
      <Container>
        <Content>
          <ProfileContainer>Company container</ProfileContainer>
          <QuoteContainer>Quote container</QuoteContainer>
        </Content>
      </Container>
    </>
  );
}

export default Company;
