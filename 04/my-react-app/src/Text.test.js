import Text from './text';

it('returns the correct text', () => {
  const children = 'test';
  expect(Text({ children })).toEqual(children);
});
