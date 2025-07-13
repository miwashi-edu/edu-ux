import React from 'react';
import {
  List,
  ListItem,
  ListIcon,
  ListGroup,
  ListDivider,
  ListHeader,
  ListFooter,
} from './index.js';

export default {
  title: 'Data Display/List',
  component: List,
};

export const Default = {
  render: () => (
    <List>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
  ),
};

export const Ordered = {
  render: () => (
    <List as="ol">
      <ListItem>Step one</ListItem>
      <ListItem>Step two</ListItem>
      <ListItem>Step three</ListItem>
    </List>
  ),
};

export const WithIcons = {
  render: () => (
    <List>
      <ListItem icon={<ListIcon>✅</ListIcon>}>Completed</ListItem>
      <ListItem icon={<ListIcon>⏳</ListIcon>}>In Progress</ListItem>
      <ListItem icon={<ListIcon>❌</ListIcon>}>Blocked</ListItem>
    </List>
  ),
};

export const Bordered = {
  render: () => (
    <List variant="bordered">
      <ListItem>Bordered item 1</ListItem>
      <ListItem>Bordered item 2</ListItem>
      <ListItem>Bordered item 3</ListItem>
    </List>
  ),
};

export const Inset = {
  render: () => (
    <List variant="inset">
      <ListItem>Inset item 1</ListItem>
      <ListItem>Inset item 2</ListItem>
      <ListItem>Inset item 3</ListItem>
    </List>
  ),
};

export const Elevated = {
  render: () => (
    <List variant="elevated">
      <ListItem>Elevated item 1</ListItem>
      <ListItem>Elevated item 2</ListItem>
      <ListItem>Elevated item 3</ListItem>
    </List>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <List size="sm">
        <ListItem>Small item 1</ListItem>
        <ListItem>Small item 2</ListItem>
      </List>
      <List size="md">
        <ListItem>Medium item 1</ListItem>
        <ListItem>Medium item 2</ListItem>
      </List>
      <List size="lg">
        <ListItem>Large item 1</ListItem>
        <ListItem>Large item 2</ListItem>
      </List>
    </div>
  ),
};

export const Divided = {
  render: () => (
    <List divided>
      <ListItem>Divided item 1</ListItem>
      <ListItem>Divided item 2</ListItem>
      <ListItem>Divided item 3</ListItem>
    </List>
  ),
};

export const Nested = {
  render: () => (
    <List>
      <ListHeader>Fruits</ListHeader>
      <ListItem>Apple</ListItem>
      <ListItem>Banana</ListItem>
      <ListGroup>
        <ListHeader>Citrus</ListHeader>
        <ListItem>Orange</ListItem>
        <ListItem>Lemon</ListItem>
        <ListFooter>End of citrus</ListFooter>
      </ListGroup>
      <ListDivider />
      <ListHeader>Vegetables</ListHeader>
      <ListItem>Carrot</ListItem>
      <ListItem>Broccoli</ListItem>
      <ListFooter>End of vegetables</ListFooter>
    </List>
  ),
};

export const RealWorld = {
  render: () => (
    <List variant="bordered" size="md" divided>
      <ListHeader>Team Members</ListHeader>
      <ListItem icon={<ListIcon>👩‍💻</ListIcon>}>Alice - Developer</ListItem>
      <ListItem icon={<ListIcon>🧑‍🎨</ListIcon>}>Bob - Designer</ListItem>
      <ListItem icon={<ListIcon>🧑‍🔬</ListIcon>}>Carol - QA</ListItem>
      <ListDivider />
      <ListHeader>Guests</ListHeader>
      <ListItem icon={<ListIcon>👤</ListIcon>}>Dave</ListItem>
      <ListFooter>End of list</ListFooter>
    </List>
  ),
};
