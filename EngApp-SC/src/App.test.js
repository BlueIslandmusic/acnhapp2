import { render, screen } from '@testing-library/react';
import App from './Acnh/AcnhApp';

test('renders learn react link', () => {
  render(<AcnhApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
