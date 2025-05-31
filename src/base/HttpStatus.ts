abstract class HttpStatus {
  public abstract name: string;
  public abstract readonly status: number;
  public abstract readonly description: string;
  public abstract readonly message: string | undefined;
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
    public static readonly status = status;
    public static readonly description = description;
    constructor(message?: string) {
      super();
      this.name = Base.name;
      this.message = message;
    }
  } as unknown as AbstractConstructor<TInst>;
}



export { HttpStatus, createHttpStatusClass };
