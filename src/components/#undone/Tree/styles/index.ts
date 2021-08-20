import './TreeDirectory.scss';
import './TreeHeader.scss';
import './TreeNode.scss';
import './TreeView.scss';

import { withPrefix } from '../../../../utilities/format';

const prefixes = {
  _: 'tree-',
  node: 'tree-node-',
}

const treeViewClasses = {
  view: 'view',
  header: 'header',
  body: 'body',
  directory: 'directory',
  children: 'children-container',
};

const treeNodeClasses = {
  container: 'container',
  title: 'title',
  icon: 'icon',
}

export const classes = {
  view: withPrefix(prefixes._, treeViewClasses),
  node: withPrefix(prefixes.node, treeNodeClasses),
}
