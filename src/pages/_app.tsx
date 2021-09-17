import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import store from 'features';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { Provider } from 'react-redux';
import '../styles/globals.css';

type Props = {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Provider store={store}>
        <div style={{ width: '100%', minHeight: 'calc(100vh - 220px)' }}>
          <Header /> <Component {...pageProps} />{' '}
        </div>
        <Footer />
      </Provider>
    </div>
  );
}

export default MyApp;
