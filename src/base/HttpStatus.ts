abstract class HttpStatus {
  constructor(
    public readonly status: number,
    public readonly description: string,
    public readonly message?: string
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
  return class extends (Base as any) {
    constructor(message?: string) {
      super(status, description, message);
    }
  } as unknown as AbstractConstructor<TInst>;
}



export { HttpStatus, createHttpStatusClass };
