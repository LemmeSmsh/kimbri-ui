import React, { useState, useEffect } from 'react';

const StyledTreeNode = styled.p`
    cursor: pointer;
    margin-left: ${props => props.level * 26}px;
    padding-left: 1.2rem;
    padding-top: .2rem;
    color: ${props => props.expanded ? 'white' : props.theme.colorMenu};
    width: max-content;
    box-sizing: border-box;
    user-select: none;
    ${props => props.type === 'camera' ?
        css`
            &::before {
                content: url(${cameraImage});
                background-repeat: no-repeat;
                background-position-y: 2px;
                margin-right: 5px;
            }

    ` : css`
            &::before {
                content: url(${props => { return props.expanded ? arrowExpandedImage : arrowCollapsedImage }});
                background-repeat: no-repeat;
                background-position-y: 2px;
                margin-right: 5px;
            }
        `
    }

    overflow-x: auto;

    ${props => props.show ? css`display: block` : css`display: none`}
    ${props => props.level && css`
        &:first-child {
            background: url(${treeBranch});
            background-repeat: no-repeat;
    }

    `}

    ${props => props.type === 'camera' && css`{
        &:hover {
            background: ${theme.backgroundDark};
            border-left: 1px solid ${theme.borderFocus}
        }
        `
    }
`

const Loader = styled.div`
    width: 60px;
    height: 30px;
    margin-left: ${props => (props.level + 1) * 18}px;
    background: url(${LoaderGif});
    background-repeat: no-repeat;
    background-position-x: 10%;
`

export default function TreeNode({ devices, node, getLocationCameras, getCameraBroadcasting, level = 0, show = false }) {
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleClickNode = (locationId) => {
        if (!devices[locationId]) {
            getLocationCameras(locationId);
            setLoading(true);
        }
        setExpanded(!expanded);
    }

    useEffect(() => {
        setLoading(false);
    }, [devices[node.id]]);

    switch (node.type) {
        case 'camera':
            return <StyledTreeNode
                expanded={expanded}
                show={show}
                level={level}
                type={node.type}
                onClick={() => getCameraBroadcasting(node.id)}
            >
                {node.name}
            </StyledTreeNode>
        default:
            return <>
                <StyledTreeNode expanded={expanded} show={show} onClick={() => handleClickNode(node.id)} level={level} type={node.type}>{node.name}</StyledTreeNode>
                {(loading && expanded) && <Loader level={level} />}
                <span>
                    {devices[node.id] && devices[node.id].map(item => {
                        return <TreeNode
                            node={item}
                            key={item.id}
                            devices={devices}
                            getLocationCameras={getLocationCameras}
                            level={level + 1}
                            show={expanded && show}
                            getCameraBroadcasting={getCameraBroadcasting}
                        />
                    })
                    }
                </span>
            </>
    }
};