import React from 'react';
import {
  Link,
} from 'react-router';
import {
  Container,
  TabBar,
  NavBar,
  amStyles
} from 'amazeui-touch';

const clickHandler = (item, e) => {
  e.preventDefault();
  console.log(item);
};
const itemLeft = {
  href: '#',
  title: 'Left'
};
const itemRight = {
  href: '#',
  title: 'Right'
};
const dataAll = {
  title: 'Navbar',
  leftNav: [{...itemLeft, icon: 'left-nav'}],
  rightNav: [{...itemRight, icon: 'right-nav'}],
  onAction: clickHandler,
};


const App = React.createClass({
  render() {
    let {
      location,
      params,
      children,
    } = this.props;
    let transition = children.props.transition || 'sfr';

    return (
      <Container direction="column" id="sk-container">

        <Container
          transition={transition}
          scrollable
        >
          {React.cloneElement(children, {key: location.key})}
        </Container>

        <TabBar
          amStyle="success"
        >
          <TabBar.Item
            component={Link}
            icon="list"
            title="聊天"
            selected={!params.component}
            to="/"
          />
          <TabBar.Item
            component={Link}
            icon="person"
            title="通信录"
            selected={params.component === 'about'}
            to="/about"
          />
          <TabBar.Item
            component={Link}
            icon="info"
            title="发现"
            selected={!params.component}
            to="/"
          />
          <TabBar.Item
            component={Link}
            icon="home"
            title="我"
            badge='β'
            selected={!params.component}
            to="/"
          />
        </TabBar>
      </Container>
    );
  }
});

export default App;
