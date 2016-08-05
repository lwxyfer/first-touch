import React from 'react';
import {
  Link
} from 'react-router';
import {
  Container,
  TabBar,
  NavBar
} from 'amazeui-touch';

const navData = {
  title: '妹子',
  titleOnLeft: true,
  amStyle: 'dark',
  rightNav: [
    {
      icon: 'search',
    },
    {
      icon: 'plus'
    }
  ]
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'home'
    }
  }

  handleClick(key, e) {
    e.preventDefault();

    this.setState({
      selected: key
    }, function () {
      console.log('选中了： %s', this.state.selected);
    });
  }

  render() {
    let {
      location,
      params,
      children,
    } = this.props;
    let transition = children.props.transition || 'sfr';

    return (
      <Container direction="column">

      <NavBar {...navData} />

        <Container
          transition={transition}
          scrollable
        >
        {React.cloneElement(children, {key: location.key})}
        </Container>

        <TabBar
          amStyle="success"
          onAction={this.handleClick.bind(this)}
        >
          <TabBar.Item
            component={Link}
            selected={this.state.selected === 'home'}
            icon="home"
            title="首页"
            to='/'
          />
          <TabBar.Item
            component={Link}
            selected={this.state.selected === 'address'}
            icon="person"
            title='通讯录'
            to='/address'
          />
          <TabBar.Item
            component={Link}
            selected={this.state.selected === 'info'}
            eventKey="info"
            icon="info"
            badge={5}
            title="发现"
            to='/find'
          />
          <TabBar.Item
            component={Link}
            selected={this.state.selected === 'info'}
            eventKey="info"
            icon="info"
            title="我"
            to='/me'
          />
        </TabBar>
      </Container>
    )
  }
}
