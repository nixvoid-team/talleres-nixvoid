<<<<<<< HEAD
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
=======
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => render(<App />))
afterEach(cleanup)

describe('App', () => {
  it('should renders two buttons', async () => {
    const minusButton = await screen.findByText('-');
    expect(minusButton).toBeDefined();
    
    const plusButton = await screen.findByText('+');
    expect(plusButton).toBeDefined();
  });
  
  it('should render the defined value', async () => {
    const valueViewer = await screen.findByText('0');
    expect(valueViewer).toBeDefined();
  })
  it('should increment the zero by one when u click the increment type button', async () => {
  
    const plusFound = await screen.findByText('+');
    fireEvent.click(plusFound) 
    const valueViewer = await screen.findByText('1')
    expect(valueViewer).toBeTruthy()
  })
  it('should decrement the zero by one when u click the increment type button', async () => {
  
    const minusFound = await screen.findByText('-');
    fireEvent.click(minusFound) 
    const valueViewer = await screen.findByText('-1')
    expect(valueViewer).toBeTruthy()
  })
  it('should increment by one the value every time u click the increment type button', async () =>{
    const plusFound = await screen.findByText('+')
    for(let i=1 ; i<5 ; i++){
      fireEvent.click(plusFound)
      const valueViewer = await screen.findByText(i.toString())
      expect(valueViewer).toBeTruthy()
    }
    
  })
  it('should increment by sapecific value when u click the increment type button', async () =>{  
    const modifiedBy = 7;
    const plusFound = await screen.findByText('+')
    fireEvent.click(plusFound)
    const valueViewer = await screen.findByText(7)
    expect(valueViewer).toBeTruthy()
  })
})

>>>>>>> feature/react-unit-testing
