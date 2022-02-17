import React from 'react';
import { screen, fireEvent } from '@testing-library/react'
import renderWithRouter from './renderWithRouter';
import '@testing-library/jest-dom'
import App from '../App';

describe('1- Quando os inputs estão corretos', () => {
  renderWithRouter(<App />);
  let loginInput = '';
  let passwordInput = '';
  beforeAll(() => {
    loginInput = screen.getByTestId('input-login');
    passwordInput = screen.getByTestId('input-password');
    
    fireEvent.change(loginInput, { target: { value: 'test@email.com'} });
    fireEvent.change(passwordInput, { target: { value: '123456'} });
  });

  it('Input de email', () => {    
    expect(loginInput).toBeInTheDocument();
    expect(loginInput).toHaveValue('test@email.com');
  });

  it('Input de password', () => {    
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveValue('123456');
  });

  it('Quando aperta o botão, vai para rota correta', () => {
    const startButton = screen.getByLabelText('button', {
      name: /entrar/i,
    });

    fireEvent.click(startButton);

    expect(location.pathname).toBe('/tasks');
  });
});
