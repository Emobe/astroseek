import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import LoginModal from './LoginModal';

describe('LoginModal', () => {
  it('should render', () => {
    const view = render(<LoginModal isOpen={true} onClose={jest.fn()} />);
    expect(view).toBeTruthy();
  });
  describe('Validation', () => {
    describe('Failures', () => {
      describe('Email field', () => {
        fit('should fail when an invalid email has been entered', async () => {
          render(<LoginModal isOpen={true} onClose={jest.fn()} />);
          const email = screen.getByTestId('email');
          userEvent.type(email, 'test');
          screen.getByText('Enter a valid email address');
        });

        it('should fail when no value has been entered', () => {
          render(<LoginModal isOpen={true} onClose={jest.fn()} />);
          const user = userEvent.setup();
          screen.getByText('Enter a valid email address');
          const submit = screen.getByText('Login', {selector: 'button'});
          screen.getByText('Enter a valid email address');
        });
      });
    });
  });
});
