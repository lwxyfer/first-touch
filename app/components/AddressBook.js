import React from 'React';
import {
  List,
} from 'amazeui-touch';

const img = <img width="32" src="http://lorempixel.com/128/128/people/" />;


export default class AddressBook extends React.Component {
  redenr() {
    return (
      <List>
        <List.Item
          media={img}
          title="List Item 1"
          />
        <List.Item
          media={img}
          title="List Item 2"
          href="#"
          />
        <List.Item
          media={img}
          title="List Item 3"
          href="#"
          />
      </List>
    )
  }
}
