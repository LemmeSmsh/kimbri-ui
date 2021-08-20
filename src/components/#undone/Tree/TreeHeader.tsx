import React from 'react';

import { classes } from './styles';

export interface ITreeHeader {
  children: JSX.Element;
  header: string | undefined;
}

const TreeHeader = ({ children, header = '' }: ITreeHeader) => (
      <div className={classes.view.view}>
      {
        header &&
          <p className={classes.view.header}>
            {header}
          </p>
      }
      <div className={classes.view.body}>
        {children}
      </div>
    </div>
)

export default TreeHeader;