import { Link } from 'react-router';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useRegisterController } from './useRegisterController';

export function Register() {
  const { errors, handleSubmit, register, isLoading } = useRegisterController();

  return (
    <div>
      <header className='flex flex-col items-center gap-4 text-center'>
        <h1 className='font-bold text-gray-900 text-2xl'>Crie sua conta</h1>
        <p className='space-x-2'>
          <span className='text-gray-700 tracking-[-0.5px]'>
            Já possui uma conta?
          </span>
          <Link
            to='/login'
            className='font-medium text-teal-900 tracking-[-0.5px]'>
            Fazer login
          </Link>
        </p>
      </header>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-[60px]'>
        <Input
          placeholder='Nome'
          error={errors.name?.message}
          {...register('name')}
        />
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
          Criar conta
        </Button>
      </form>
    </div>
  );
}
