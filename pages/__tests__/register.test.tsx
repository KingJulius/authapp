import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Register from '@/pages/register';

describe('Register component', () => {
  test('renders without errors', () => {
    const root = render(<Register />);
    expect(screen.getByText('Register')).toBeInTheDocument();
    expect(root).toMatchSnapshot();
  });

  test('form validation shows error for invalid username', async () => {
    const root = render(<Register />);
    fireEvent.change(screen.getByTestId('username'), { target: { value: 'invalid username' } });
    fireEvent.click(screen.getByTestId('signup_btn'));
    expect(await screen.findByText('Invalid Username...!')).toBeInTheDocument();
    expect(root).toMatchSnapshot();
  });

  test('form validation shows error for invalid password', async () => {
    const root = render(<Register />);
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'short' } });
    fireEvent.click(screen.getByTestId('signup_btn'));
    expect(await screen.findByText('Must be greater then 8 and less then 20 characters long')).toBeInTheDocument();
    expect(root).toMatchSnapshot();
  });

  test('form validation shows error for mismatching passwords', async () => {
    const root = render(<Register />);
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'validPassword123' } });
    fireEvent.change(screen.getByTestId('confirm_password'), { target: { value: 'differentPassword' } });
    fireEvent.click(screen.getByTestId('signup_btn'));
    expect(await screen.findByText('Password Not Match...!')).toBeInTheDocument();
    expect(root).toMatchSnapshot();
  });
});
