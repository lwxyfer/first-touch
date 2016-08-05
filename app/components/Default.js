import React from 'react';
import {
  Badge,
  Group,
  List,
  Container,
  Link
} from 'amazeui-touch'

const img = <img width="32" src="http://lorempixel.com/128/128/people/" />;
const badge = <Badge rounded amStyle="alert">5</Badge>;

export default class Default extends React.Component {
  clickTest() {
    console.log('i am list',this.index)
  }
  render() {
    return (
      <Container
        scrollable
      >
        <List>
          <List.Item
            linkComponent={Link}
            media={img}
            after={badge}
            title="List Item 1"
            onClick={this.clickTest.bind(this)}
          />
          <List.Item
            linkComponent={Link}
            media={img}
            after="14.08"
            title="List Item 2"
            href="#"
          />
          <List.Item
            media={img}
            after={badge}
            title="List Item 3"
            href="#"
          />
          <List.Item
            media={img}
            after={badge}
            title="List Item 1"
          />
          <List.Item
            media={img}
            after="14.08"
            title="List Item 2"
            href="#"
          />
          <List.Item
            media={img}
            after={badge}
            title="List Item 3"
            href="#"
          />
        </List>
      </Container>
    )
  }

}
