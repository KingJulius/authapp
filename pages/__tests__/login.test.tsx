import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { Login } from '@/pages/Login';

describe('Login component', () => {
  test('renders without errors', () => {
    const root = render(<Login />);
    expect(screen.getByText('Explore')).toBeInTheDocument();
    expect(root).toMatchSnapshot();
  });
  test('form validation shows error for invalid password', async () => {
    const root = render(<Login />);
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'short' } });
    fireEvent.click(screen.getByTestId('login_btn'));
    expect(await screen.findByText('Must be greater then 8 and less then 20 characters long')).toBeInTheDocument();
    expect(root).toMatchSnapshot();
  });
});
