import React from 'react';
import AppMenu from '../components/AppMenu';

export default function Home(): JSX.Element {
  return (
    <AppMenu />
  )
}

export async function getStaticProps() {
  return { props: { name: 'Lens' } }
}
