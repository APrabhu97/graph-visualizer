
export namespace AlgorithmRegistry {
  export type Constructor<T> = {
    new (...args: any[]): T;
    readonly prototype: T;
  };
  const keyVsAlgoConstructorMap = new Map<string, Constructor<Algorithm>>();
  export function GetImplementationMap():  Map<string, Constructor<Algorithm>> {
    return keyVsAlgoConstructorMap;
  }
  export function register(key: string){
      return function <T extends Constructor<Algorithm>>(ctor: T) {
        keyVsAlgoConstructorMap.set(key, ctor);
        return ctor;
      }
  }
}

export interface Algorithm {
    doAThing(): void;
  }