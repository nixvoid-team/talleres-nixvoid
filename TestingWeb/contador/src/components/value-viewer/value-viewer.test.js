<<<<<<< HEAD
import { render, screen } from '@testing-library/react';

import { ValueViewer } from './value-viewer';

describe('ValueViewer', () => {
  it('should render', () => {
    expect(() => {
      render(<ValueViewer />);
    }).not.toThrow();
  })
  it('should show a inital value', async () => {
    const initialValue = 0;
    const props = {
      value: initialValue
    }
    render(<ValueViewer {...props} />);
    const ValueViewerFound = await screen.findByText('0');
    expect(ValueViewerFound).toBeInTheDocument();
=======
import { cleanup, render, screen } from '@testing-library/react';
import { ValueViewer } from './value-viewer';


afterEach(cleanup)


describe('ValueViewer', () => {
  it('should show a initial value of zero', async () => {
    render(<ValueViewer />);
    const valueViewerFound = await screen.findByText('0');
    expect(valueViewerFound).toBeTruthy();
  })
  it('should show a custom initial value', async () => {
    const props = {
      value: 5
    };
    const { container } = render(<ValueViewer {...props}/>);
    // const containerDiv = container.querySelector('div');
    // const divText = containerDiv.innerHTML;
    // expect(divText).toEqual('5');
    const element = screen.getByText('5');
    expect(element).toBeTruthy();

>>>>>>> feature/react-unit-testing
  })
})