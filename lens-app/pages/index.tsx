import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Header from '../components/Header';

// MOCKS
import user from '../mocks/user.mock';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Lens</title>
        <link href="/fonts/style.css" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <Header user={user} />
    </Layout>
  )
}
