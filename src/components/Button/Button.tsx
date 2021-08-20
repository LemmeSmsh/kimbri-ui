import './Button.scss';

import React from 'react';

export interface Props {
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
}

const KimbriButton = ({
  onClick,
  title = '',
  disabled = false,
}: Props) => {
  return (
    <button onClick={onClick} disabled={disabled}>{title}</button>
  )
}

export default KimbriButton;
