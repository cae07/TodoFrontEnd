import React from 'react';
import { screen, fireEvent } from '@testing-library/react'
import renderWithRouter from './renderWithRouter';
import '@testing-library/jest-dom'
import App from '../App';

describe('3- Add nova tarefa', () => {
  describe('Quando sucesso', () => {
    it('', () => {
      renderWithRouter(<App />, { route: '/task' });
    });
  });

  describe('Quando incorreto', () => {
    it('', () => {
      renderWithRouter(<App />, { route: '/task' });
    });
  });
});
