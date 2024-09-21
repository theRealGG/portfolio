import { routing } from './routing';

describe('Test routing', () => {
  it('should contain localized pathnames', () => {
    const keys = Object.keys(routing.pathnames);
    const expected = ['/', '/about', '/projects', '/contact'];
    keys.forEach((key) => {
      expect(expected).toContain(key);
    });
  });
});
