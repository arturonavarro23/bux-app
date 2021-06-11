import { render, screen, waitFor } from '@testing-library/react';
import * as ReactRouter from 'react-router';
import userEvent from '@testing-library/user-event';
import api from 'api';
import { fullProvidersWrapper } from 'utils/test';
import { Home } from './Home';

jest.mock('react-router');

const defaultSearchResults = [
  { symbol: 'FB', name: 'Facebook Inc.' },
  { symbol: 'SURF', name: 'Surface Oncology Inc.' },
  { symbol: 'TILE', name: 'Interface Inc.' },
];

function setup({
  searchResults = defaultSearchResults,
  push = jest.fn(),
} = {}) {
  jest.spyOn(api, 'get').mockResolvedValue({ data: searchResults });
  jest.spyOn(ReactRouter, 'useHistory').mockReturnValue({
    push,
  });

  const result = render(<Home />, {
    wrapper: fullProvidersWrapper(),
  });

  const title = screen.getByText('Find a symbol');
  const input = screen.getByPlaceholderText('Eg. Apple');
  return {
    title,
    input,
    ...result,
  };
}

describe('<Home />', () => {
  it('Should renders correctly', () => {
    const { title, input } = setup();

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('Should select an option', async () => {
    const mockPush = jest.fn();
    const { input } = setup({ push: mockPush });

    userEvent.type(input, 'face');

    await waitFor(
      () => {
        expect(
          screen.getByText(defaultSearchResults[0].name),
        ).toBeInTheDocument();
      },
      { timeout: 600 },
    );

    userEvent.click(screen.getByText(defaultSearchResults[0].name));
    expect(mockPush).toHaveBeenCalled();
    expect(mockPush).toHaveBeenLastCalledWith('/company/FB');
  });
});
