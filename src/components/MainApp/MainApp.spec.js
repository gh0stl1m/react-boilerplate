// External libraries
import React from 'react';
import { render } from 'react-testing-library';

// Components
import MainApp from './MainApp';

describe('MainApp component', () => {
  it('Should render without error', () => {
    render(<MainApp />);
  });
});
