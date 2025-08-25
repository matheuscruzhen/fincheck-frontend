import React, { createContext, useCallback, useEffect, useState } from 'react';
import { QueryCache, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { localStorageKeys } from '../config/localStorageKeys';
import { usersService } from '../services/usersService';
import { LaunchScreen } from '../../ui/components/LaunchScreen';
import type { User } from '../entities/User';

interface AuthContextValue {
  user: User | undefined;
  signedIn: boolean;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN
    );
    return !!storedAccessToken;
  });

  const { clear } = new QueryCache();

  const { data, isError, isFetching, isSuccess } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => usersService.me(),
    enabled: signedIn,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    setSignedIn(false);
    clear();
  }, [clear]);

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou!');
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider
      value={{ signedIn: signedIn && isSuccess, user: data, signin, signout }}>
      <LaunchScreen isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
