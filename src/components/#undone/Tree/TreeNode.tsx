import classnames from 'classnames';
import React from 'react';

import { classes } from './styles';

export interface ITreeNode {
  children?: React.ReactNode | React.ReactChild;
  expanded?: boolean;
  title: string;
  icon?: SVGElement | React.ReactNode;
  onClick?: () => void;
}

const TreeNode = ({ title, expanded, icon, children, onClick }: ITreeNode) => {
  const nodeClasses = classnames({
    [classes.node.container]: true,
    toogler: children,
    expanded: expanded,
  });

  return (
    <span className={nodeClasses}>
      <span className={classes.node.title} onClick={onClick}>
        {title}
      </span>
      <span className={classes.node.children}>
        {expanded && children}
      </span>
    </span >
  )
}


export default TreeNode;