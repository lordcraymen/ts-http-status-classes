abstract class HttpStatus {
  public readonly message: string | undefined;
  constructor(
    public readonly status: number,
    public readonly description: string,
  ) {}
}

type AbstractConstructor<T = any> = abstract new (...args: any[]) => T;

function createHttpStatusClass<
  TBase extends AbstractConstructor,
  TInst extends InstanceType<TBase> = InstanceType<TBase>
>(
  Base: TBase,
  status: number,
  description: string
): AbstractConstructor<TInst> {
  if(status < 100 || status > 300) {
    throw new Error("Http Status codes must be between 100 and 300.");
  }
  return class extends (Base as any) {
    constructor(message?: string) {
      super(status, description);
      this.message = message;
    }
  } as unknown as AbstractConstructor<TInst>;
}



export { HttpStatus, createHttpStatusClass };
