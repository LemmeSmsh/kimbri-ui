import { IObject } from './types.d';

export function toObjectById(array: IObject[], key: string = 'id') {
  const result: IObject = {};

  for (const item of array) {
    const keyValue = item[key];

    if (keyValue)  {
      result[String(keyValue)] = item;
    }
  }

  return result;
};


export function withPrefix(prefix: string, input: IObject<string>) {
  return new Proxy(input, {
    get: getHandler
  })

  function getHandler(target: typeof input, key: string): string {    
    return prefix + target[key];
  }
};
