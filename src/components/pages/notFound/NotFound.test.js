import { render, screen } from '@testing-library/react';
import { themeProviderWrapper } from 'utils/test';
import NotFound from './NotFound';

function setup() {
  return render(<NotFound />, {
    wrapper: themeProviderWrapper,
  });
}

describe('<NotFound />', () => {
  it('should render correctly', () => {
    setup();

    expect(screen.getByText('404 Not found')).toBeInTheDocument();
  });
});
