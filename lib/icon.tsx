import * as React from 'react';
import './importAllIcons';

interface IconProps {
  name: string
}

const Icon: React.FC<IconProps> = (props) => {
  return (
    <svg>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;