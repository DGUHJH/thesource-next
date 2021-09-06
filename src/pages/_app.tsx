import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import '../styles/globals.css';

type Props = {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props) {
  return (
    <div>
      <Header /> <Component {...pageProps} /> <Footer />
    </div>
  );
}

export default MyApp;
