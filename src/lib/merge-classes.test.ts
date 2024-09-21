import { mergeClasses } from './merge-classes';

describe('Test mergeClasses', () => {
  it('Should merge tailwind classes', () => {
    const actual = mergeClasses('px-2', 'py-2', 'px-4', 'py-4');
    expect(actual).toContain('px-4');
    expect(actual).toContain('py-4');
    expect(actual).not.toContain('px-2');
    expect(actual).not.toContain('py-2');
  });
  it('Should ignore falsy values', () => {
    const actual = mergeClasses('px-2', 'py-2', false && 'px-4', undefined);
    expect(actual).toContain('px-2');
    expect(actual).toContain('py-2');
    expect(actual).not.toContain('px-4');
  });
});
