import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './router';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './app/contexts/AuthContext';

const queryCient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryCient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}
