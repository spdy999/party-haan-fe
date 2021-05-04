import { createContext, useContext } from 'react';

const AppContext = createContext({ message: 'startMsg' });

export function AppWrapper({ children }) {
  const sharedState = {
    /* whatever you want */
    message: 'HelloWorld!',
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
