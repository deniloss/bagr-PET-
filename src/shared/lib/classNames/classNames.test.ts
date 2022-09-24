import { classNames } from './classNames';

describe('classNames', () => {
  test('обычный класс', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('класс c модами', () => {
    const expected = 'someClass hovered scroll';
    expect(classNames('someClass', { hovered: true, scroll: true })).toBe(expected);
  });

  test('класс c модами false', () => {
    const expected = 'someClass hovered';
    expect(classNames('someClass', { hovered: true, scroll: false })).toBe(expected);
  });

  test('класс c дополнениями', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });
});
