import { mergeClasses } from '@/shared/utility';

describe('Test merge-classes', () => {
  it('mergeClasses(px-4, px-2) = px-4', () => {
    expect(mergeClasses('px-4', 'px-2')).toBe('px-2');
  });
  it('mergeClasses(px-2, py-2, p-4) = p-4', () => {
    expect(mergeClasses('px-2', 'py-2', 'p-4')).toBe('p-4');
  });
  it('mergeClasses(p-4 && false, p-2) = p-2', () => {
    expect(mergeClasses('p-4' && false, 'p-2')).toBe('p-2');
  });
});
