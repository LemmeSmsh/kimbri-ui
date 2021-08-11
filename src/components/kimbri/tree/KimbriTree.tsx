import React from 'react';
import TreeNode from './KimbriTreeNode';

const TreeViewWrapper = styled.span`
    overflow-x: auto;
    overflow-y: auto;
`

const _prefix = 'kimbri-tree';

const classList = {
    root: _prefix,
    node: _prefix + '_node',
    preloader: _prefix + '_preloader',
    icon: _prefix + '_icon',
}


const KimbriTree = ({ content }) => (
    <div className="kimbri-tree">
        {content.map(node => {
            return <TreeNode
                node={node}
                key={node.id}
                devices={devices}
                show={true}
            />
        })}
    </TreeViewWrapper>
)

export default KimbriTree;