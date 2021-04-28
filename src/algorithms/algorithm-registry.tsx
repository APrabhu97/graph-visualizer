
export namespace AlgorithmRegistry {
  export type Constructor<T> = {
    new (...args: any[]): T;
    readonly prototype: T;
  };
  
  const keyVsAlgoConstructorMap = new Map<string, Algorithm>();

  export function GetImplementationMap():  Map<string, Algorithm> {
    return keyVsAlgoConstructorMap;
  }
  export function register(key: string){
      return function <T extends Constructor<Algorithm>>(ctor: T) {
        keyVsAlgoConstructorMap.set(key, new ctor());
        return ctor;
      }
  }
}

export interface Algorithm {
    doAThing(): void;
    getLabel(): string;
  }