import { useTranslation } from 'react-i18next';
import { number, shape } from 'prop-types';
import numeral from 'numeral';

import { QuoteWrapper } from './styles';
function Quote({ content }) {
  const { t } = useTranslation();
  const { open, close, volume, high, low } = content || {};
  return (
    <QuoteWrapper>
      <h3>{'company.quote'}</h3>
      <div className="historical">
        <div className="historical__item">
          <small>{t('company.days.open')}</small>
          <span>{numeral(open).format('$0.0')}</span>
        </div>
        <div className="historical__item">
          <small>{t('company.closing.price')}</small>
          <span>{numeral(close).format('$0.0')}</span>
        </div>
        <div className="historical__item">
          <small>{t('company.volume')}</small>
          <span>{numeral(volume).format('0.0a').toUpperCase()}</span>
        </div>
      </div>
      <div className="historical">
        <div className="historical__item">
          <small>{t('company.intraday.high')}</small>
          <span>{numeral(high).format('$0.0')}</span>
        </div>
        <div className="historical__item">
          <small>{t('company.intraday.low')}</small>
          <span>{numeral(low).format('$0.0')}</span>
        </div>
      </div>
    </QuoteWrapper>
  );
}

Quote.propTypes = {
  content: shape({
    open: number,
    close: number,
    volume: number,
    high: number,
    low: number,
  }),
};

export default Quote;
