import { validateName } from "./validate";

const namePattern = /^[A-Z][a-zA-Z]*$/;

class KimbriClassList {
  private __namespace: 'kimbri';
  private __name: string;

  private __lastAddedClass: string;
  public classes: {
    [key: string]: string;
  };
  
  constructor(name: string) {
    validateName(name, namePattern);

    this.__namespace = 'kimbri';
    this.__name = name;
    
    this.__lastAddedClass = 'base';
    this.classes = {
      base: [
        this.__namespace,
        this.__name.toLowerCase()
      ].join('-'),
    };
  }

  public get(className: string = 'base') {
    return this.classes[className];
  }

  public add(className: string, parentClass: string = 'base') {
    if (!this.classes[parentClass])
      throw new Error(`Cannot add "${className}" class name. Parent "${parentClass}" doesn\'t exist for ${this.__name} component yet`);

    this.classes[className] = this.classes[parentClass] + '_' + className;
    this.__lastAddedClass = className;
    return this;
  }

  public addChild(className: string) {
    this.add(className, this.__lastAddedClass);
    return this;
  }
};

export {
  KimbriClassList
};