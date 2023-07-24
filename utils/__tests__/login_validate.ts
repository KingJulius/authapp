import login_validate, { LoginProps } from '@/utils/validate';

describe('login_validate function', () => {
  test('should return errors for missing email and password', () => {
    const values: LoginProps = {
      email: '',
      password: '',
    };

    const errors = login_validate(values);

    expect(errors.email).toBe('Required');
    expect(errors.password).toBe('Required');
  });

  test('should return errors for invalid email format', () => {
    const values: LoginProps = {
      email: 'invalidemail',
      password: 'validPassword',
    };

    const errors = login_validate(values);

    expect(errors.email).toBe('Invalid email address');
    expect(errors.password).toBe('');
  });

  test('should return errors for invalid password format', () => {
    const values: LoginProps = {
      email: 'valid@email.com',
      password: 'invalid password',
    };

    const errors = login_validate(values);

    expect(errors.email).toBe('');
    expect(errors.password).toBe('Invalid Password');
  });

  test('should return empty errors object for valid email and password', () => {
    const values: LoginProps = {
      email: 'valid@email.com',
      password: 'validPassword',
    };

    const errors = login_validate(values);

    expect(errors.email).toBe('');
    expect(errors.password).toBe('');
  });
});
