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
