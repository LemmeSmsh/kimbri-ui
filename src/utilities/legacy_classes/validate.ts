export function validateName(_name: string, regExp: RegExp) {
  if (!_name) throw new Error
    ('No components name provided, required: string');
  if (typeof _name !== 'string') throw new Error
    (`Component name must be type of string, but got: ${typeof _name}`);
  if (_name.search(regExp) !== 0) throw new Error
    (`Component name must contain only [a-z] and start with a capital letter, got: ${_name}`);
}