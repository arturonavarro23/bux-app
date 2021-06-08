import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import numeral from 'numeral';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCaretUp,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { getCompany } from 'store/actions/company';
import { getQuote } from 'store/actions/quote';
import { toogleFavorite } from 'store/actions/favorites';
import { selectCompanyInfo } from 'store/selectors';
import { getChangeStatus } from 'utils/quoteUtils';
import { changeStatus } from 'constants/enums';
import NotFound from '../notFound';
import { Profile } from './profile';
import { Quote } from './quote';
import {
  TitleContainer,
  TitleInfo,
  Title,
  QuoteSummary,
  Container,
  Content,
  ProfileContainer,
  QuoteContainer,
} from './styles';

export function Company() {
  const { symbol } = useParams();
  const dispatch = useDispatch();
  const { company, quote, isFavorite } = useSelector(selectCompanyInfo);
  const quoteChangeStatus = getChangeStatus(quote.content?.change || 0);

  useEffect(() => {
    dispatch(getCompany(symbol));
    dispatch(getQuote(symbol));
  }, [symbol, dispatch]);

  if (company.status === 'error' || quote.status === 'error') {
    return <NotFound />;
  }

  if (company.status !== 'success' || quote.status !== 'success') {
    return null;
  }

  return (
    <>
      <TitleContainer>
        <TitleInfo>
          <Title>
            {company.content?.companyName}
            <span>({company.content?.symbol})</span>
            <FontAwesomeIcon
              className={`favorite ${isFavorite ? 'active' : ''}`}
              icon={isFavorite ? faStar : faStarRegular}
              onClick={() => dispatch(toogleFavorite(company.content))}
            />
            <small>{company.content?.exchange}</small>
          </Title>
          <QuoteSummary changeStatus={quoteChangeStatus}>
            <span className="close">
              {numeral(quote.content?.close).format('$0.00')}
            </span>
            <span className="change">
              {quoteChangeStatus === changeStatus.INCREMENT && (
                <FontAwesomeIcon icon={faCaretUp} />
              )}
              {quoteChangeStatus === changeStatus.DECREASE && (
                <FontAwesomeIcon icon={faCaretDown} />
              )}
              {quote.content?.change}(
              {numeral(quote.content?.changePercent).format('0.00%')})
            </span>
            <small>Data as of {quote.content?.latestTime}</small>
          </QuoteSummary>
        </TitleInfo>
      </TitleContainer>
      <Container>
        <Content>
          <ProfileContainer>
            <Profile content={company.content} />
          </ProfileContainer>
          <QuoteContainer>
            <Quote content={quote.content} />
          </QuoteContainer>
        </Content>
      </Container>
    </>
  );
}

export default Company;
