import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Head from 'next/head';
import '../globals/global.css';

// MOCKS
import user from '../mocks/user.mock';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>{pageProps.name}</title>
        <link href="/fonts/style.css" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      {pageProps.pageTag !== 'view' && <Header user={user} />}
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;