import { CounterButton } from './counter-button';
import { fireEvent, render, screen } from '@testing-library/react';

describe('CounterButton', () => {
  it('should render', () => {
    expect(() => {
      render(<CounterButton />)
    }).not.toThrow();
  })

  // [-]
  it('should have a minus symbol', async () => {
    render(<CounterButton />);
    const minusElement = await screen.findByText('-');
    expect(minusElement).toBeInTheDocument();
  })
  
  // [+]
  it('should have a plus symbol', async () => {
    const props = {
      type: 'increment'
    }
    render(<CounterButton {...props} />);
    const plusElement = await screen.findByText('+');
    expect(plusElement).toBeInTheDocument();
  })
  
  it('should have a plus symbol', async () => {
    const props = {
      type: 'decrement'
    }
    render(<CounterButton {...props} />);
    const plusElement = await screen.findByText('-');
    expect(plusElement).toBeInTheDocument();
  })

  it('should call to onChangeValue when user clicks the button', async () => {
    const onChangeValueMock = jest.fn();
    const props = {
      type: 'increment',
      onChangeValue: onChangeValueMock
    }
    render(<CounterButton {...props} />);
    const plusButtonFound = await screen.findByText('+');
    fireEvent.click(plusButtonFound);
    fireEvent.click(plusButtonFound);
    expect(onChangeValueMock).toBeCalledTimes(2);
  })
})