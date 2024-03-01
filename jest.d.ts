export {};
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeUrl(): R;
    }
  }
}
