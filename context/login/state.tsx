import { createContext, useContext } from 'react';

const LoginContext = createContext({ loginMessage: 'startMsg' });

export function LoginContextWrapper({ children }) {
  const sharedState = {
    /* whatever you want */
    loginMessage: 'Login HelloWorld!',
  };

  return (
    <LoginContext.Provider value={sharedState}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLoginContext() {
  return useContext(LoginContext);
}
