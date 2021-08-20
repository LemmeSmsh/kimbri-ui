export type IObject<T = any> = {
  [key: string]: T
};

export type IReadonlyObject = Readonly<IObject>;
export type IReadonlyArray<T = any> = Readonly<Array<T>>;
