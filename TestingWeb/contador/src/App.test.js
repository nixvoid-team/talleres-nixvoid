import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
})

describe('App', () => {
  it('should render', () => {
    expect(() => {
      render(<App />)
    }).not.toThrow();
  })
  it('should have two buttons: decrement and increment', async () => {
    const minusButton = await screen.findByText('-');
    expect(minusButton).toBeInTheDocument();
    
    const plusButton = await screen.findByText('+');
    expect(plusButton).toBeInTheDocument();
  })
  it('should show the initial value', async () => {
    const viewerFound = await screen.findByText('0');
    expect(viewerFound).toBeInTheDocument();
  })
  it('should increment the initial value when user clicks the increment button', async () => {
    const plusButton = await screen.findByText('+');
    fireEvent.click(plusButton);
    const viewerFound = await screen.findByText('1');
    expect(viewerFound).toBeInTheDocument();
  })
})