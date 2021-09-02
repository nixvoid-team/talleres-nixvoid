<<<<<<< HEAD
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
=======
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { CounterButton } from './counter-button'

afterEach(cleanup)

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
    const plusFound = await counterButtonRendered.findByText('+');
    expect(plusFound).toBeTruthy();
  })
  it('should call to onChangeValue when it\'s clicked', async () => {
    const onClickMock = jest.fn();
    const props = {
      type: 'increment',
      onChangeValue: onClickMock
    };
    const counterButtonRendered = render(<CounterButton {...props}/>);
    const plusFound = await counterButtonRendered.findByText('+');
    fireEvent.click(plusFound);
    expect(onClickMock).toBeCalledTimes(1);
  })
  it('should call to onChangeValue with value as argument', async () => {
    const onClickMock = jest.fn();
    const props = {
      type: 'decrement',
      value: 5,
      onChangeValue: onClickMock
    };
    const counterButtonRendered = render(<CounterButton {...props}/>);
    const plusFound = await counterButtonRendered.findByText('-');
    fireEvent.click(plusFound);
    expect(onClickMock).toHaveBeenCalledWith(-5);
>>>>>>> feature/react-unit-testing
  })
})