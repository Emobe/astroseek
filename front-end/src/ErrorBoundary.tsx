// ErrorContext.tsx

import React, { createContext, useState, useContext, useCallback, ReactNode } from 'react';

interface ErrorContextType {
  errors: string[];
  addError: (error: string) => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

interface ErrorProviderProps { children: ReactNode }

export const ErrorProvider: React.FC<ErrorProviderProps>= ({ children }) => {
  const [errors, setErrors] = useState<string[]>([]);

  const addError = useCallback((error: string) => {
    setErrors(currentErrors => [...currentErrors, error]);
  }, []);

  return (
    <ErrorContext.Provider value={{ errors, addError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useErrorContext = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useErrorContext must be used within an ErrorProvider');
  }
  return context;
};
