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
  })
})