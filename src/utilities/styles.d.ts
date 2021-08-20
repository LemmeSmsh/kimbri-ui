export interface IClassNames {
  [name: string]: any;
}

interface IStyleConfig {
  [rule: string]: string;
};

export type IStyleRule = string;
export type IStyleUnits = string;
export type IStyleBuilder = (value: number | string) => string;
