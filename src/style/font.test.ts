import { poppins } from './font';

describe('Test font', () => {
  it('Poppins font must be defined', () => {
    expect(poppins).toBeDefined();
    expect(poppins).toBeTruthy();
  });
});
