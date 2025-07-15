import React from 'react';
import Grid from './Grid';

export default {
  title: 'PageLayout/Grid',
  component: Grid,
};

export const Default = {
  render: () => (
    <Grid>
      <Grid.Col>1</Grid.Col>
      <Grid.Col>2</Grid.Col>
      <Grid.Col>3</Grid.Col>
    </Grid>
  )
};

export const Columns = {
  render: () => (
    <Grid columns={4} gap="md">
      <Grid.Col>1</Grid.Col>
      <Grid.Col>2</Grid.Col>
      <Grid.Col>3</Grid.Col>
      <Grid.Col>4</Grid.Col>
    </Grid>
  )
};

export const Gap = {
  render: () => (
    <Grid columns={3} gap="xl">
      <Grid.Col>Col 1</Grid.Col>
      <Grid.Col>Col 2</Grid.Col>
      <Grid.Col>Col 3</Grid.Col>
    </Grid>
  )
};

export const RowCol = {
  render: () => (
    <Grid.Row gap="lg" align="center" justify="between">
      <Grid.Col span={3}>Row Col 1</Grid.Col>
      <Grid.Col span={6}>Row Col 2</Grid.Col>
      <Grid.Col span={3}>Row Col 3</Grid.Col>
    </Grid.Row>
  )
};

export const Responsive = {
  render: () => (
    <Grid.Row gap="md">
      <Grid.Col xs={12} sm={6} md={4} lg={3} xl={2}>
        Responsive 1
      </Grid.Col>
      <Grid.Col xs={12} sm={6} md={4} lg={3} xl={2}>
        Responsive 2
      </Grid.Col>
      <Grid.Col xs={12} sm={6} md={4} lg={3} xl={2}>
        Responsive 3
      </Grid.Col>
      <Grid.Col xs={12} sm={6} md={4} lg={3} xl={2}>
        Responsive 4
      </Grid.Col>
      <Grid.Col xs={12} sm={6} md={4} lg={3} xl={2}>
        Responsive 5
      </Grid.Col>
      <Grid.Col xs={12} sm={6} md={4} lg={3} xl={2}>
        Responsive 6
      </Grid.Col>
    </Grid.Row>
  )
};

export const Alignment = {
  render: () => (
    <Grid.Row gap="md" align="center" justify="center">
      <Grid.Col span={4} style={{ background: '#e0e7ef', height: 60 }}>A</Grid.Col>
      <Grid.Col span={4} style={{ background: '#e0e7ef', height: 100 }}>B</Grid.Col>
      <Grid.Col span={4} style={{ background: '#e0e7ef', height: 80 }}>C</Grid.Col>
    </Grid.Row>
  )
};

export const Justification = {
  render: () => (
    <Grid.Row gap="md" justify="between">
      <Grid.Col span={3}>Left</Grid.Col>
      <Grid.Col span={3}>Center</Grid.Col>
      <Grid.Col span={3}>Right</Grid.Col>
    </Grid.Row>
  )
};

export const Interactive = {
  render: () => {
    const [count, setCount] = React.useState(3);
    return (
      <>
        <button onClick={() => setCount(count + 1)}>Add Column</button>
        <Grid columns={count} gap="sm">
          {Array.from({ length: count }).map((_, i) => (
            <Grid.Col key={i}>{i + 1}</Grid.Col>
          ))}
        </Grid>
      </>
    );
  }
};
