import React, { useContext } from 'react';

import { classes } from './styles';
import TreeNode from './TreeNode';
import { TreeContext } from './TreeView';
import { IMeta, INormalizedChild, INormalizedCtx } from './TreeView.d';


export interface ITreeDirectory {
  children: INormalizedChild[];
}

const {
  directory,
} = classes.view;

const TreeDirectory = ({ parentId, meta }: { parentId: string, meta: IMeta }) => {
  const { children } = useContext<INormalizedCtx>(TreeContext);
  
  return (
    <div className={directory}>
      {children && children[parentId] && children[parentId]
        .map(node => {
          const {
            handleClick,
          } = meta[node.type];

          return (
            <TreeNode
              title={node.title}
              key={node.id}
              expanded={node.expanded}
              onClick={() => handleClick instanceof Function && handleClick(String(node.id))}
            />
          )
        })}
    </div>
  )
}

export default TreeDirectory;
