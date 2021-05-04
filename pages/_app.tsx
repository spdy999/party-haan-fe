import '../styles/globals.css';
import { AppProps } from 'next/app';
import { AppWrapper } from '../context/state';
import { LoginContextWrapper } from '../context/login/LoginProvider';
import { PartyContextWrapper } from '../context/party/PartyProvider';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <LoginContextWrapper>
        <PartyContextWrapper>
          <Component {...pageProps} />
        </PartyContextWrapper>
      </LoginContextWrapper>
    </AppWrapper>
  );
}

export default App;
