import { socialLinks } from '@/shared/utility';

describe('Test social links', () => {
  it('should not be empty', () => {
    expect(socialLinks.length > 1).toBeTruthy();
  });
  describe('should be valid elements', () => {
    it('should have valid keys', () => {
      const keys = socialLinks.map((s) => s.key);
      keys.forEach((k) => expect(k).toBeDefined());
      keys.forEach((k) => {
        const count = keys.filter((e) => e === k).length;
        expect(count).toBeTruthy();
      });
    });
    it('should have name', () => {
      const names = socialLinks.map((s) => s.name);
      names.forEach((k) => expect(k).toBeDefined());
    });

    it('should have valid links', () => {
      socialLinks.forEach((l) => expect(l.href).toBeUrl());
    });
    it('should have icons', () => {
      socialLinks.map((l) => l.icon).forEach((i) => expect(i).toBeDefined());
    });
  });
});
