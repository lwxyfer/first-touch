import React from 'react';
import ReactDOM from 'react-dom';
// import App from './src/app';
import 'amazeui-touch/dist/amazeui.touch.min.css';
import {
  Button,Card
} from 'amazeui-touch';
import {
  GridExample
} from './js/accordion.jsx';

// class Box
let CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
        <Card>aaaaaa</Card>
      </div>
    );
  }
});

ReactDOM.render(<GridExample />, document.getElementById('root'));
