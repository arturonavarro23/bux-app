import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { themeProviderWrapper } from 'utils/test';
import Router from './Router';

jest.mock('components/common/header', () => () => <div>Bux Header</div>);
jest.mock('components/pages/home', () => () => <div>Home Page</div>);
jest.mock('components/pages/company', () => () => <div>Company Page</div>);

function setup({ initialRoute = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Router />
    </MemoryRouter>,
    {
      wrapper: themeProviderWrapper,
    },
  );
}

describe('<Router />', () => {
  it('should render correctly', () => {
    setup();

    expect(screen.getByText('Bux Header')).toBeInTheDocument();
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('should render the company page', () => {
    setup({ initialRoute: '/company/appl' });

    expect(screen.getByText('Bux Header')).toBeInTheDocument();
    expect(screen.getByText('Company Page')).toBeInTheDocument();
  });

  it('should render the 404 page', () => {
    setup({ initialRoute: '/not-a-good-route' });

    expect(screen.getByText('Bux Header')).toBeInTheDocument();
    expect(screen.getByText('404 Not found')).toBeInTheDocument();
  });
});
