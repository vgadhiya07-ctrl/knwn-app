import React, { createContext, useContext, useState } from 'react';

type UserState = {
  name: string;
  oneLiner: string;
  setName: (v: string) => void;
  setOneLiner: (v: string) => void;
};

const UserContext = createContext<UserState | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState('');
  const [oneLiner, setOneLiner] = useState('');

  return (
    <UserContext.Provider value={{ name, oneLiner, setName, setOneLiner }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserState {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
