import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => render(<App />))

describe('App', () => {
  it('should renders two buttons', async () => {
    const minusButton = await screen.findByText('-');
    expect(minusButton).toBeDefined();
    
    const plusButton = await screen.findByText('+');
    expect(plusButton).toBeDefined();
  });
  
  it('should render the defined value', async () => {
    const valueViewer = await screen.findByText('25');
    expect(valueViewer).toBeDefined();
  })
})

