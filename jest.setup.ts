import '@testing-library/react';
import '@testing-library/jest-dom';

expect.extend({
  toBeUrl(received: string) {
    // check if received is a valid url
    if (!received.match(/^(http|https):\/\/[^ "]+$/)) {
      return {
        message: () => `Expected valid url received this: ${received}`,
        pass: false,
      };
    }
    return {
      message: () => `Received is a valid url: ${received}`,
      pass: true,
    };
  },
});
