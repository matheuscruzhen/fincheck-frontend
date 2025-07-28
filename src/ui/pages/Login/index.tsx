import { Link } from 'react-router';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useLoginController } from './useLoginController';

export function Login() {
  const { errors, handleSubmit, register, isLoading } = useLoginController();
  return (
    <div>
      <header className='flex flex-col items-center gap-4 text-center'>
        <h1 className='font-bold text-gray-900 text-2xl'>Entre em sua conta</h1>
        <p className='space-x-2'>
          <span className='text-gray-700 tracking-[-0.5px]'>
            Novo por aqui?
          </span>
          <Link
            to='/register'
            className='font-medium text-teal-900 tracking-[-0.5px]'>
            Crie uma conta
          </Link>
        </p>
      </header>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-[60px]'>
        <Input
          type='email'
          placeholder='E-mail'
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          type='password'
          placeholder='Senha'
          error={errors.password?.message}
          {...register('password')}
        />

        <Button type='submit' isLoading={isLoading} className='mt-2'>
          Entrar
        </Button>
      </form>
    </div>
  );
}
