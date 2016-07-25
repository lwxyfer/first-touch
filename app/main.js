import React from 'react';
import ReactDOM from 'react-dom';
// import App from './src/app';
import 'amazeui-touch/dist/amazeui.touch.min.css';
import {
  Button,
  Card,
  Container,
  Group,
} from 'amazeui-touch';
import TypographyExample from './js/typeTest.js';
import TabsExample from './js/tabtest';

// class Box
// class MyTest extends React.Component {
//   render() {
//     return (
//       <div>HELLO WORLD
//         <Button>我是阿牛</Button>
//         <TypographyExample />
//       </div>
//     )
//   }
// }

let Photo = React.createClass({
  render() {
    return (
      <div>
        <h1>高度测试</h1>
        <TabsExample />
      </div>
    )
  },
});

ReactDOM.render(<Photo />, document.getElementById('root'));
