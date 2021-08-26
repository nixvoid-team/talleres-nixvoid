import { render, screen } from '@testing-library/react';

import { CounterButton } from './counter-button'

describe('CounterButton', () => {
  it('should render', () => {
    render(<CounterButton />);
  })
  it('should have a minus symbol', async () => {
    const counterButtonRendered = render(<CounterButton />);
    const minusFound = await counterButtonRendered.findByText('-');
    expect(minusFound).toBeTruthy();
  })
  it('should have a minus symbol when its type is decrement', async () => {
    const props = {
      type: 'decrement'
    };
    const counterButtonRendered = render(<CounterButton {...props} />);
    const minusFound = await counterButtonRendered.findByText('-');
    expect(minusFound).toBeTruthy();
  })
  it('should have a plus symbol when his type is increment', async () => {
    const props = {
      type: 'increment'
    };
    const counterButtonRendered = render(<CounterButton {...props}/>);
    const minusFound = await counterButtonRendered.findByText('+');
    expect(minusFound).toBeTruthy();
  })
})