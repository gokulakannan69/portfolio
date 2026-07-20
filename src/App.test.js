import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Scene', () => () => <div data-testid="mock-scene" />);

test('renders developer name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Gokulakannan/i);
  expect(nameElement).toBeInTheDocument();
});
