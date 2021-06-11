import { render, screen, waitFor } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import userEvent from '@testing-library/user-event';
import { FavoritesModal } from './FavoritesModal';
import { themeProviderWrapper } from 'utils/test';

jest.mock('react-router');

const defaultState = {
  isOpen: true,
  favorites: [{ symbol: 'BUX', companyName: 'Bux' }],
};

function setup({
  dispatch = jest.fn(),
  state = defaultState,
  push = jest.fn(),
} = {}) {
  jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(dispatch);
  jest.spyOn(ReactRedux, 'useSelector').mockReturnValue(state);
  jest.spyOn(ReactRouter, 'useHistory').mockReturnValue({
    push,
  });

  return render(<FavoritesModal />, { wrapper: themeProviderWrapper });
}

describe('FavoritesModal', () => {
  it('Should renders correctly', () => {
    setup();

    expect(screen.getByText('Favorite Companies')).toBeInTheDocument();
    expect(screen.getByText('Bux (BUX)')).toBeInTheDocument();
  });

  it('Should not be displayed if is closed', () => {
    setup({ state: { ...defaultState, isOpen: false } });

    expect(screen.queryByText('Favorite Companies')).not.toBeInTheDocument();
  });

  it('Should call onClose', () => {
    const dispatchMock = jest.fn();

    setup({ dispatch: dispatchMock });

    const closeButton = screen.getByRole('button', { name: 'close' });
    userEvent.click(closeButton);

    expect(dispatchMock).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenCalledWith({
      payload: undefined,
      type: 'favorites/closeModal',
    });
  });

  it('Should select a company', () => {
    const pushMock = jest.fn();

    setup({ push: pushMock });

    userEvent.click(screen.getByText('Bux (BUX)'));

    expect(pushMock).toHaveBeenCalled();
    expect(pushMock).toHaveBeenCalledWith('/company/BUX');
  });
});
