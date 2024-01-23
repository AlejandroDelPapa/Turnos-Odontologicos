import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import '../styles/global.css';
import {NextUIProvider} from '@nextui-org/react'

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </NextUIProvider>
  );
}
