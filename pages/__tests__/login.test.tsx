import React from 'react'
import Login from '@/pages/login';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


describe('Login Page Test',  () => {
    it('layout is rendered', () => {
        const root = render(<Login />)
        const emailInput = screen.getByTestId('email')
        const passwordInput = screen.getByTestId('password')
        const login_btn = screen.getByTestId('login_btn')
        expect(emailInput).toBeVisible()
        expect(passwordInput).toBeVisible()
        expect(login_btn).toBeInTheDocument()
        expect(root).toMatchSnapshot()
    })
})