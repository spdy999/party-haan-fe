import '../styles/globals.css';
import { AppProps } from 'next/app';
import { AppWrapper } from '../context/state';
import { LoginContextWrapper } from '../context/login/state';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <LoginContextWrapper>
        <Component {...pageProps} />
      </LoginContextWrapper>
    </AppWrapper>
  );
}

export default App;
