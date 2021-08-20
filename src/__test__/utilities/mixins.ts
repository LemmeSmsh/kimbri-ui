type NonObject = undefined | null | string | number | boolean;
type Modes = undefined | null | 'each' | 'never';
type PropName = undefined | null | string;

export class MixinHelper {
  private _args: any[] | null;
  private _mode: Modes;
  private _prop: PropName;

  constructor() {
    this._args = null;
    this._mode = null;
    this._prop = null;
  }

  _cleanupCtx() {
    this._args = null;
    this._mode = null;
    this._prop = null;
  }

  _isCalledAfter(paramField: '_args' | '_mode' | '_prop', methodName: '.each' | '.never' | '.execute') {
    if (!this._args) {
      throw new Error(`Method ${methodName} must be called after forArgs`);
    }
    if (paramField === '_args') return null;

    if (!this._mode) {
      throw new Error(`Method ${methodName} must be called after .each or .never`);
    }
    if (paramField === '_mode') return null;

    if (!this._prop) {
      throw new Error(`Method ${methodName} must be called after .prop`);
    }
    if (paramField === '_prop') return null;
  }

  /* Set array for iterative expect
  */
  forArgs(...args: any[]) {
    this._cleanupCtx();

    this._args = args;

    const { forArgs, ...next } = this;
    return next;
  }

  /* Choose a comparison mode
  */
  get each() {
    this._isCalledAfter('_args', '.each');

    this._mode = 'each';
    return this;
  }

  get never() {
    this._isCalledAfter('_args', '.never');


    this._mode = 'never';
    return this;
  }

  /* Execute expect
  */
  execute(expectFn: (item: any) => void) {
    this._isCalledAfter('_mode', '.execute');

    expectFn(null);
  }
};
