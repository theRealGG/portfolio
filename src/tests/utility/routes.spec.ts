import { pathnames } from '@/config';
import { routes } from '@/shared/utility';

describe('Test routes', () => {
  it('should not be empty', () => {
    expect(routes.length > 1).toBeTruthy();
  });
  it('should contain custom route links', () => {
    const keys = routes.map((r) => r.href);
    const definedRoutes = Object.keys(pathnames);
    expect(keys).toHaveLength(routes.length);
    keys.forEach((k) => expect(definedRoutes).toContain(k));
  });
  describe('should be valid elements', () => {
    it('should have valid keys', () => {
      const keys = routes.map((s) => s.key);
      keys.forEach((k) => expect(k).toBeDefined());
      keys.forEach((k) => {
        const count = keys.filter((e) => e === k).length;
        expect(count).toBeTruthy();
      });
    });
    it('should have name', () => {
      const names = routes.map((s) => s.name);
      names.forEach((k) => expect(k).toBeDefined());
    });
    it('should have icons', () => {
      routes.map((l) => l.icon).forEach((i) => expect(i).toBeDefined());
    });
  });
});
