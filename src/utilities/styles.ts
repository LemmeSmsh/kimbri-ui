import { IClassNames, IStyleConfig } from './styles.d';


class InlineStyleBuilder {
  private _styles: IStyleConfig;

  constructor() {
    this._styles = {};
  }

  add(rule: string, value: string) {
    this._styles[rule] = value;
    return this;
  }

  get styles() {
    const style = { ...this._styles };
    this._styles = {};
    return { style };
  }
}

export const inlineStyles = new InlineStyleBuilder();

export function classnames(classes: IClassNames) {
  let result = '';
  
  for (const name in classes) {
  	classes[name] && (result += ' ' + name)
  }
  
  return result.trim();
}