import { render, screen, waitFor } from '@testing-library/react';
import * as ReactRouter from 'react-router';
// import userEvent from '@testing-library/user-event';
import api from 'api';
import { fullProvidersWrapper } from 'utils/test';
import { Company } from './Company';
import companyMock from 'mocks/company';
import quoteMock from 'mocks/quote';

jest.mock('react-router');

function setupSuccessfully() {
  jest
    .spyOn(api, 'get')
    .mockResolvedValueOnce({ data: companyMock })
    .mockResolvedValueOnce({ data: quoteMock });
  jest.spyOn(ReactRouter, 'useParams').mockReturnValue({
    symbo: 'AAPL',
  });

  return render(<Company />, {
    wrapper: fullProvidersWrapper(),
  });
}

function setupWithError() {
  jest
    .spyOn(api, 'get')
    .mockRejectedValueOnce(new Error('error company'))
    .mockRejectedValueOnce(new Error('quote'));
  jest.spyOn(ReactRouter, 'useParams').mockReturnValue({
    symbo: 'AAPL',
  });

  return render(<Company />, {
    wrapper: fullProvidersWrapper(),
  });
}

describe('<Company />', () => {
  it('Should renders correctly', async () => {
    setupSuccessfully();

    await waitFor(() => {
      expect(screen.getByText('Apple Inc')).toBeInTheDocument();
    });

    expect(screen.getByText(/AAPL/)).toBeInTheDocument();
    expect(
      screen.getByText('NASDAQ/NGS (GLOBAL SELECT MARKET)'),
    ).toBeInTheDocument();
    expect(screen.getByText('$125.89')).toBeInTheDocument();
    expect(screen.getByText('Data as {{date}}')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Quote')).toBeInTheDocument();
  });

  it('Should not render the content it when is loading', async () => {
    setupSuccessfully();

    expect(screen.queryByText('Apple Inc')).not.toBeInTheDocument();
    expect(screen.queryByText('Profile')).not.toBeInTheDocument();
    expect(screen.queryByText('Quote')).not.toBeInTheDocument();
  });

  it('Should render the error status', async () => {
    setupWithError();

    await waitFor(() => {
      expect(screen.getByText('404 Not found')).toBeInTheDocument();
    });
  });
});
