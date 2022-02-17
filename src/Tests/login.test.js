import React from 'react';
import { screen, fireEvent } from '@testing-library/react'
import renderWithRouter from './renderWithRouter';
import '@testing-library/jest-dom'
import App from '../App';

// tive problemas mas acredito que por causa do bootstrap
// vou escrever os testes e voltar para entender o motivo
describe('1- Quando os inputs estão corretos', () => {
  renderWithRouter(<App />);
  let emailInput = '';
  let passwordInput = '';
  beforeAll(() => {
    emailInput = screen.getByTestId('input-email');
    passwordInput = screen.getByTestId('input-password');
    
    fireEvent.change(emailInput, { target: { value: 'test@email.com'} });
    fireEvent.change(passwordInput, { target: { value: '123456'} });
  });

  it('Input de email', () => {    
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveValue('test@email.com');
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

// falta implementar os expects
describe('2- Quando os inputs estão incorretos', () => {
  describe('Input de email', () => {
    it('Quando email inválido', () => {
      renderWithRouter(<App />);

      const emailInput = screen.getByTestId('input-email');
      const passwordInput = screen.getByTestId('input-password');
      const startButton = screen.getByLabelText('button', {
        name: /entrar/i,
      });
      
      fireEvent.change(emailInput, { target: { value: 'test@'} });
      fireEvent.change(passwordInput, { target: { value: '123456'} });
      fireEvent.click(startButton);
    });

    it('Quando email vazio', () => {
      renderWithRouter(<App />);

      const passwordInput = screen.getByTestId('input-password');
      const startButton = screen.getByLabelText('button', {
        name: /entrar/i,
      });

      fireEvent.change(passwordInput, { target: { value: '123456'} });
      fireEvent.click(startButton);
    });
  });

  describe('Input de password', () => {
    it('Quando password menor que 6 digitos', () => {
      renderWithRouter(<App />);

      const emailInput = screen.getByTestId('input-email');
      const passwordInput = screen.getByTestId('input-password');
      const startButton = screen.getByLabelText('button', {
        name: /entrar/i,
      });
      
      fireEvent.change(emailInput, { target: { value: 'test@email.com'} });
      fireEvent.change(passwordInput, { target: { value: '12345'} });
      fireEvent.click(startButton);
    });

    it('Quando password vazio', () => {
      renderWithRouter(<App />);

      const emailInput = screen.getByTestId('input-email');
      const startButton = screen.getByLabelText('button', {
        name: /entrar/i,
      });
      
      fireEvent.change(emailInput, { target: { value: 'test@email.com'} });
      fireEvent.click(startButton);
    });
  });
});
