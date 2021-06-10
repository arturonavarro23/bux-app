import { changeStatus } from 'constants/enums';

export function getChangeStatus(change) {
  if (change > 0) {
    return changeStatus.INCREMENT;
  }

  if (change < 0) {
    return changeStatus.DECREASE;
  }

  return changeStatus.NO_CHANGE;
}

export function backendQuoteToFrontend(quote) {
  return {
    latestTime: quote?.latestTime || '',
    change: quote?.change,
    close: quote?.close || quote?.iexClose,
    changePercent: quote?.changePercent,
    open: quote?.open || quote?.iexOpen,
    volume: quote?.volume,
    high: quote?.high,
    low: quote?.low,
  };
}
