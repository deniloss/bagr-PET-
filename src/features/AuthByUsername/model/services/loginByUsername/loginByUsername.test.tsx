import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/ loginByUsername';

describe('loginByUsername', () => {
  test('Проверка авторизации пользователя', () => {
    loginByUsername({ username: 'admin', password: '123' });
  });

  test('Проверка авторизации с ошибкой', () => {
    loginByUsername({ username: 'sass', password: 'asd14' });
  });
});
