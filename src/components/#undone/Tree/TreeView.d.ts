export interface IMeta {
  [childType: string]: {
    icon?: any;
    activeIcon?: any;
    handleClick?: (id: string) => void | string;
    aliases?: {
      title?: string;
      total?: string;
    }
  }
}

export interface INormalizedChild {
  id: string | number;
  title: string;
  type: string;
  total: number;
  expanded?: boolean;
}
export type INormalizedChildrenProps = {
  root: INormalizedChild[];
  [parentId: string]: INormalizedChild[];
}

interface IRecursiveChild extends INormalizedChild {
  children?: IRecursiveChild[];
}
export type IRecursiveChildren = IRecursiveChild[];

export type ITreeChildren = INormalizedChildrenProps | IRecursiveChildren;

export type ITreeProps<T> = {
  header?: string;
  meta?: IMeta,
  data?: T[],
}

export interface INormalizedCtx {
  children?: INormalizedChildrenProps
}