import { render, screen } from '@testing-library/react';
import Chat from './Chat';

test('renders chat loader', () => {
  render(<Chat />);
  const loader = screen.getByText(/Loading.../i);
  expect(loader).toBeInTheDocument();
});

