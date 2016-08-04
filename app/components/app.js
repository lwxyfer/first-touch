import React from 'react';
import {Link} from 'react-router';
import {Container, TabBar} from 'amazeui-touch';

export default class App extends React.Component {
  state = {
    selected: 'home'
  },

  handleClick(key, e) {
    e.preventDefault();

    this.setState({
      selected: key
    }, function () {
      console.log('选中了： %s', this.state.selected);
    });
  },
  render() {
    return (
      <Container direction="column">

        <Container transition={transition}>
          {React.cloneElement(children, {key: location.key})}
        </Container>

        <TabBar amStyle="primary"
          onAction={this.handleClick}
        >
          <TabBar.Item
          eventKey="home"
          active={this.state.selected === 'home'}
          icon="home"
          title="首页"
          />
        <TabBar.Item
          active={this.state.selected === 'gear'}
          eventKey="gear"
          icon="gear"
          title="设置"
          />
        <TabBar.Item
          active={this.state.selected === 'info'}
          eventKey="info"
          icon="info"
          badge={5}
          title="信息"
          />
        </TabBar>
    )
  }
}
