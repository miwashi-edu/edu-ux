import React from 'react';
import Footer from './Footer';

export default {
  title: 'PageLayout/Footer',
  component: Footer,
};

export const Default = {
  render: () => (
    <Footer>
      <Footer.Left>
        <span>&copy; 2024 My Company</span>
      </Footer.Left>
      <Footer.Center>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Terms</Footer.Link>
      </Footer.Center>
      <Footer.Right>
        <span>Contact: info@example.com</span>
      </Footer.Right>
    </Footer>
  )
};

export const Minimal = {
  render: () => (
    <Footer variant="minimal">
      <Footer.Center>
        <span>Minimal Footer</span>
      </Footer.Center>
    </Footer>
  )
};

export const Dark = {
  render: () => (
    <Footer variant="dark">
      <Footer.Left>
        <span>&copy; 2024 My Company</span>
      </Footer.Left>
      <Footer.Center>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Terms</Footer.Link>
      </Footer.Center>
      <Footer.Right>
        <span>Dark Mode</span>
      </Footer.Right>
    </Footer>
  )
};

export const Light = {
  render: () => (
    <Footer variant="light">
      <Footer.Center>
        <span>Light Footer</span>
      </Footer.Center>
    </Footer>
  )
};

export const WithLinks = {
  render: () => (
    <Footer>
      <Footer.Left>
        <Footer.Link href="#">Home</Footer.Link>
      </Footer.Left>
      <Footer.Center>
        <Footer.Link href="#">Docs</Footer.Link>
        <Footer.Link href="#">Blog</Footer.Link>
      </Footer.Center>
      <Footer.Right>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.Right>
    </Footer>
  )
};

export const ResponsiveDemo = {
  render: () => (
    <div style={{ minHeight: 200 }}>
      <Footer>
        <Footer.Left>
          <span>&copy; 2024 Responsive</span>
        </Footer.Left>
        <Footer.Center>
          <Footer.Link href="#">Center Link</Footer.Link>
        </Footer.Center>
        <Footer.Right>
          <span>Right Area</span>
        </Footer.Right>
      </Footer>
    </div>
  )
};

export const CustomElement = {
  render: () => (
    <Footer as="section">
      <Footer.Center>
        <span>Footer as &lt;section&gt;</span>
      </Footer.Center>
    </Footer>
  )
};
