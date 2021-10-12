/* eslint-disable no-undef */
import axios from 'axios';

describe('Controllers tests', () => {
  it('POST /login with correct credentials', async () => {
    // Use a user in you database or just delete this test//

    const response = await axios.get(
      'http://localhost:8080/login?register=0050007&password=123321',
    );
    const expected = ['register', 'name', 'email', 'token', 'type'];

    const { data } = response;

    const keys = Object.keys(data);

    expect(keys).toHaveLength(5);

    expect(keys).toEqual(expected);
  });

  it.only('POST /login with incorrect credentials', async () => {
    const response = await axios.get('http://localhost:8080/login');

    expect(response.data).toHaveProperty('code');

    expect(response.data).toHaveProperty('message');
  });

  it('POST /login with no register', async () => {
    const response = await axios.post('http://localhost:8080/login', {
      password: 'any',
    });

    expect(response.data).toHaveProperty('code');

    expect(response.data).toHaveProperty('message');

    expect(response.data.message).toBe('Matrícula não informada !');
  });

  it('POST /login with no password', async () => {
    const response = await axios.post('http://localhost:8080/login', {
      register: 'any',
    });

    expect(response.data).toHaveProperty('code');

    expect(response.data).toHaveProperty('message');

    expect(response.data.message).toBe('Senha não informada !');
  });
});
