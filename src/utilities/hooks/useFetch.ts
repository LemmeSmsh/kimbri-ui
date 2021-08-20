import { IObject } from '../types';

export default function useFetch(url: string, args: IObject<string | number>, cb: (result: any) => void): void {
  fetch(url, args)
    .then(response => response.json())
    .then(json => cb(json))
    .catch(e => {
      console.error(e);
    })
}