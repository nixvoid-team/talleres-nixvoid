import { fireEvent, render, screen } from '@testing-library/react';
import { CounterValueInput } from './counter-value-input';

describe('CounterValueInput', () => {
  it('should render', () => {
    expect(() => {
      render(<CounterValueInput />);
    }).not.toThrow();
  })
  it('should retrieve the user value', async () => {
    const onValueInputMock = jest.fn();
    const props = {
      onValueInput: onValueInputMock
    }
    render(<CounterValueInput {...props} />);
    const inputFound = await screen.findByPlaceholderText('Ingresa tu valor inicial');
    fireEvent.change(inputFound, {
      target: {
        value: 8
      }
    })
    expect(onValueInputMock).toBeCalledWith(8);
  })
})