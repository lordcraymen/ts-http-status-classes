import { HttpStatus, createHttpStatusClass } from '../src/base/HttpStatus';

describe('HttpStatus', () => {
  it('should create a class with the correct properties', () => {
    const CustomStatus = createHttpStatusClass(
      class {
        public name = 'CustomStatus';
      },
      200,
      'OK'
    );

    class MyCustomStatus extends CustomStatus {
      public name = 'MyCustomStatus';
    }

    const statusInstance = new MyCustomStatus('Success');
    expect(statusInstance.name).toBe('MyCustomStatus');
    expect(statusInstance.status).toBe(200);
    expect(statusInstance.description).toBe('OK');
    expect(statusInstance.message).toBe('Success');
  });

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