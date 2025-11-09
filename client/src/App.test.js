import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';

// IMPORTANT: You might need to fix this import path!
// I am guessing your store is at 'client/src/redux/store.js'
// Check your project and update this line if it's wrong.
import store from './redux/store'; 

test('renders app and finds "Home" text', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  
  // Look for text that is ACTUALLY on your page (e.g., "Home" in your nav)
  const homeElement = screen.getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();
});