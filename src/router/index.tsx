import { Routes, Route, BrowserRouter } from 'react-router';
import { AuthGuard } from './AuthGuard';
import { Register } from '../ui/pages/Register';
import { Login } from '../ui/pages/Login';
import { AuthLayout } from '../ui/layouts/AuthLayout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path='/' element={<h1>Dashboard</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
