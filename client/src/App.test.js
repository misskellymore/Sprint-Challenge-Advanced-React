import React from 'react';
import ReactDOM from 'react-dom';
import App, {UserCard} from './App';
import {render, fireEvent} from '@testing-library/react';

import '@testing-library/jest-dom';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('to test first test', () => {
  // Arrange
  const { getByTestId } = render(<App />);
  // Act - getting the node by text
  getByTestId(/testing/i);
  
  // Assertion is if ^^^ is truthy
});

// MVP