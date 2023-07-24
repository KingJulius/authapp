import { registerValidate, RegisterProps } from '@/utils/validate';

describe('registerValidate function', () => {
  test('should return errors for missing username, email, password, and cpassword', () => {
    const values: RegisterProps = {
      username: '',
      email: '',
      password: '',
      cpassword: '',
    };

    const errors = registerValidate(values);

    expect(errors.username).toBe('Required');
    expect(errors.email).toBe('Required');
    expect(errors.password).toBe('Required');
    expect(errors.cpassword).toBe('Required');
  });

  test('should return errors for invalid username with spaces', () => {
    const values: RegisterProps = {
      username: 'invalid username',
      email: 'valid@email.com',
      password: 'validPassword',
      cpassword: 'validPassword',
    };

    const errors = registerValidate(values);

    expect(errors.username).toBe('Invalid Username...!');
    expect(errors.email).toBe('');
    expect(errors.password).toBe('');
    expect(errors.cpassword).toBe('');
  });

  test('should return errors for invalid email format', () => {
    const values: RegisterProps = {
      username: 'validUsername',
      email: 'invalidemail',
      password: 'validPassword',
      cpassword: 'validPassword',
    };

    const errors = registerValidate(values);

    expect(errors.username).toBe('');
    expect(errors.email).toBe('Invalid email address');
    expect(errors.password).toBe('');
    expect(errors.cpassword).toBe('');
  });

  test('should return errors for invalid password format', () => {
    const values: RegisterProps = {
      username: 'validUsername',
      email: 'valid@email.com',
      password: 'Pass word',
      cpassword: 'Pass word',
    };

    const errors = registerValidate(values);

    expect(errors.username).toBe('');
    expect(errors.email).toBe('');
    console.log(errors.password, 'aaaa')
    expect(errors.password).toBe('Invalid Password');
    expect(errors.cpassword).toBe('');
  });

  test('should return errors for mismatching passwords', () => {
    const values: RegisterProps = {
      username: 'validUsername',
      email: 'valid@email.com',
      password: 'validPassword',
      cpassword: 'mismatchPassword',
    };

    const errors = registerValidate(values);

    expect(errors.username).toBe('');
    expect(errors.email).toBe('');
    expect(errors.password).toBe('');
    expect(errors.cpassword).toBe('Password Not Match...!');
  });

  test('should return empty errors object for valid data', () => {
    const values: RegisterProps = {
      username: 'validUsername',
      email: 'valid@email.com',
      password: 'validPassword',
      cpassword: 'validPassword',
    };

    const errors = registerValidate(values);

    expect(errors.username).toBe('');
    expect(errors.email).toBe('');
    expect(errors.password).toBe('');
    expect(errors.cpassword).toBe('');
  });
});
