import React from 'react';
import { screen, fireEvent } from '@testing-library/react'
import renderWithRouter from './renderWithRouter';
import '@testing-library/jest-dom'
import App from '../App';

describe('1- Verifica os inputs', () => {
  it('O input de email está funcionando', () => {
    renderWithRouter(<App />);
  });
});
