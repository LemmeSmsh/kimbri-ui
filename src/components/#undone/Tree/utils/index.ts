import { INormalizedChild, INormalizedChildrenProps, INormalizedCtx } from '../TreeView.d';

export const normalizeFolders = (data: any[], defaultType: string): INormalizedCtx => {
  if (!Array.isArray(data)) return {};

  const _children = data.reduce<INormalizedChildrenProps>((ctx, child) => {
    const {
      id,
      total,
      parentId,
      name: title,
    } = child;

    const parentKey = parentId ? String(parentId) : 'root';
    const childProps: INormalizedChild = {
      id: id,
      type: defaultType,
      total: total,
      title,
    }

    total && (childProps.expanded = false)
    !ctx[parentKey] && (ctx[parentKey] = [])

    ctx[parentKey].push(childProps);

    return { ...ctx };

  }, { root: [] });

  return {
    children: _children,
  };
};
