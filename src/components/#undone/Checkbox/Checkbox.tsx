import React, { ChangeEvent, ChangeEventHandler, EventHandler, SyntheticEvent, useState } from 'react';
import { FormEvent } from 'react';
import './Checkbox.scss';

const Checkbox = ({ checked, onChange = (any: any) => {} }: React.HTMLProps<HTMLInputElement>) => {
  const [_checked, _setChecked] = useState<boolean>(false);

  const handleChange = (e: any) => {
    _setChecked(!_checked);
    onChange(e.currentTarget);
  };

  return (
    <label className="label-checkbox">
      <input
        className="input-checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
    </label>
  )

};

export default Checkbox;