import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import store from 'features';
import { Provider } from 'react-redux';
import '../styles/globals.css';

type Props = {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props) {
  return (
    <div>
      <Provider store={store}>
        <Header /> <Component {...pageProps} /> <Footer />
      </Provider>
    </div>
  );
}

export default MyApp;
