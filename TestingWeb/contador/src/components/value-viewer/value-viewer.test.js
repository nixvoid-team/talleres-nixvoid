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
  })
})