export interface Algorithm {
  doAThing(): void;
}

export namespace AlgorithmRegistry {
  export type Constructor<T> = {
    new (...args: any[]): T;
    readonly prototype: T;
  };
  const implementations: Constructor<Algorithm>[] = [] ;
  export function GetImplementations(): Constructor<Algorithm>[] {
    return implementations;
  }
  export function register<T extends Constructor<Algorithm>>(ctor: T) {
    implementations.push(ctor);
    return ctor;
  }
}
