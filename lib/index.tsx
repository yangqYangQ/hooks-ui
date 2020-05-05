import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from './Icon';

const clickFn: React.MouseEventHandler = (e) => {
  console.log(e);
};

ReactDOM.render(
  <>
    <Icon name='github' onClick={clickFn}/>
    <Icon name='twitter'/>
    <Icon name='youtube'/>
  </>,
  document.getElementById('root')
);