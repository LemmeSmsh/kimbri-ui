import { IObject } from '../types';

const useAction = () => (action: (...args: any[]) => Promise<any>, args: IObject<string | number>, cb: (result: any) => void): void => {
  const _arguments 
  
  action(...Object.values(args))
    .then(response => cb(response))
    .catch(e => {
      console.error();
    })
}

export default useAction;