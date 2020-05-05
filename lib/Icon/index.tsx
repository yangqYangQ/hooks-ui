import * as React from 'react';
import classnames from '../helpers/classnames';
import './importAll';
import './index.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
}

const Icon: React.FC<IconProps> =
  ({
     className, name, ...restProps
   }) => {
    return (
      <svg className={classnames('hooks-ui-icon', className)}
           {...restProps}
      >
        <use xlinkHref={`#${name}`}/>
      </svg>
    );
  };

export default Icon;