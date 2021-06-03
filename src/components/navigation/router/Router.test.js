import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { themeProviderWrapper } from 'utils/test';
import Router from './Router';

jest.mock('components/pages/candidates', () => () => (
  <div>Candidates Page</div>
));

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

    expect(screen.getByText('Applications')).toBeInTheDocument();
    expect(screen.getByText('Candidates Page')).toBeInTheDocument();
  });

  it('should render the 404 page', () => {
    setup({ initialRoute: '/not-a-good-route' });

    expect(screen.getByText('Applications')).toBeInTheDocument();
    expect(screen.getByText('404 Not found')).toBeInTheDocument();
  });
});
