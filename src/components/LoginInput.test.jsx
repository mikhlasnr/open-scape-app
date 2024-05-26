/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */
import React from 'react';
import {
  describe, it, expect, afterEach,
 } from 'vitest';
 import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginInput from './LoginInput';
 
expect.extend(matchers);
 
describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

 it('should handle username typing correctly', async () => {
   // Arrange
   render(<LoginInput login={() => {}} />);
   const usernameInput = await screen.getByPlaceholderText('Username');
 
   // Action
   await userEvent.type(usernameInput, 'usernametest');
 
   // Assert
   expect(usernameInput).toHaveValue('usernametest');
 });
 it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });
});
