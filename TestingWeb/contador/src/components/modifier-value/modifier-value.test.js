import { render, screen } from '@testing-library/react';

import { ModifierValue } from './modifier-value';

describe('ModifierValue', () => {
  it('should render', async () => {
    render(<ModifierValue />);
  })
  it('should retrieve the mofifiedBy value', async () => {
    render(<ModifierValue />);
  })
})