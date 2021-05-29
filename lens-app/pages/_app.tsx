import { AppProps } from 'next/app';
import '../globals/global.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App;