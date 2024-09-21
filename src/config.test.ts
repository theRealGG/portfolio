import { host, port } from './config';

describe('Test config values', () => {
  it('app should have config values', () => {
    expect(host).toBeDefined();
    expect(host).toBeTruthy();
    expect(port).toBeDefined();
    expect(port).toBeTruthy();
  });
});
