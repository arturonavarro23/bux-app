import { number, shape } from 'prop-types';
import numeral from 'numeral';

import { QuoteWrapper } from './styles';
function Quote({ content }) {
  const { open, close, volume, high, low } = content || {};
  return (
    <QuoteWrapper>
      <h3>Quote</h3>
      <div className="historical">
        <div className="historical__item">
          <small>Day’s Open</small>
          <span>{numeral(open).format('$0.0')}</span>
        </div>
        <div className="historical__item">
          <small>Closing Price</small>
          <span>{numeral(close).format('$0.0')}</span>
        </div>
        <div className="historical__item">
          <small>Volume</small>
          <span>{numeral(volume).format('0.0a').toUpperCase()}</span>
        </div>
      </div>
      <div className="historical">
        <div className="historical__item">
          <small>Intraday High</small>
          <span>{numeral(high).format('$0.0')}</span>
        </div>
        <div className="historical__item">
          <small>Intraday Low</small>
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
