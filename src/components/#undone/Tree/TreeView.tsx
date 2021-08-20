import React, { createContext } from 'react';

import TreeDirectory from './TreeDirectory';
import TreeHeader from './TreeHeader';
import { INormalizedCtx, ITreeProps } from './TreeView.d';
import { normalizeFolders } from './utils';

const initialContext: INormalizedCtx = {
  children: {
    root: []
  }
}

export const TreeContext = createContext<INormalizedCtx>(initialContext);

export type ITreeTypes = 'normalized' | 'recursive';

const TreeView = ({ header = '', meta = {}, data = [] }: ITreeProps<any[]>) => {
  const treeType: ITreeTypes = 'normalized';

  console.log(data, 'treeProps')

  switch (treeType) {
    case 'normalized':
      return (
        <TreeContext.Provider value={{ ...normalizeFolders(data, 'folder') }}>
          <TreeHeader header={header}>
            <TreeDirectory meta={meta} parentId="root" />
          </TreeHeader>
        </TreeContext.Provider>
      );
    default:
      return null;
  }
}

export default TreeView;