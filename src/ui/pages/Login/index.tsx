import { Link } from 'react-router';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useLoginController } from './useLoginController';

export function Login() {
  const { errors, handleSubmit, register } = useLoginController();
  return (
    <div>
      <header className='flex flex-col text-center gap-4 items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Entre em sua conta</h1>
        <p className='space-x-2'>
          <span className='text-gray-700 tracking-[-0.5px]'>
            Novo por aqui?
          </span>
          <Link
            to='/register'
            className='text-teal-900 font-medium tracking-[-0.5px]'>
            Crie uma conta
          </Link>
        </p>
      </header>

      <form onSubmit={handleSubmit} className='mt-[60px] flex flex-col gap-4'>
        <Input
          type='email'
          placeholder='E-mail'
          error={errors.email?.message}
          {...register('email')}
        />
        {/* {errors.email && <span>{errors.email.message}</span>} */}
        <Input
          type='password'
          placeholder='Senha'
          error={errors.password?.message}
          {...register('password')}
        />
        {/* {errors.password && <span>{errors.password.message}</span>} */}
        <Button type='submit' className='mt-2'>
          Entrar
        </Button>
      </form>
    </div>
  );
}
