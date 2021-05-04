import { createContext, useContext, useState, useEffect } from 'react';
import loginInitialState from './state';

const LoginContext = createContext(loginInitialState);

export function LoginContextWrapper({ children }) {
  const [loginMessage, setLoginMessage] = useState<string>(
    loginInitialState.loginMessage,
  );
  // const sharedState = {
  //   /* whatever you want */
  //   loginMessage: 'Login msg update!',
  // };
  useEffect(() => {
    setLoginMessage('Hello from use effect');
  }, []);

  return (
    <LoginContext.Provider value={{ loginMessage }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLoginContext() {
  return useContext(LoginContext);
}
