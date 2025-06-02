import { HttpStatus, createHttpStatusClass } from '../src/base/HttpStatus';

describe('HttpStatus', () => {
  it('should allow subclassing', () => {
    class CustomError extends HttpStatus {
      public name = 'CustomError';
      public status = 500;
      public description = 'Internal Server Error';
      public message: string | undefined;

      constructor(message?: string) {
        super();
        this.message = message;
      }
    }

    const errorInstance = new CustomError('An error occurred');
    expect(errorInstance.name).toBe('CustomError');
    expect(errorInstance.status).toBe(500);
    expect(errorInstance.description).toBe('Internal Server Error');
    expect(errorInstance.message).toBe('An error occurred');
  });
}
);