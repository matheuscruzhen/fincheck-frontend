import { Outlet } from 'react-router';
import illustration from '../../assets/illustration.png';
import { Logo } from '../components/Logo';

export function AuthLayout() {
  return (
    <div className='flex w-full h-full'>
      <div className=' w-full lg:w-1/2 h-full flex flex-col justify-center items-center gap-16'>
        <Logo className='h-6 text-gray-500' />
        <div className='w-full max-w-[504px] px-8 '>
          <Outlet />
        </div>
      </div>
      <div className='hidden w-1/2 h-full lg:flex justify-center items-center p-8 relative'>
        <img
          src={illustration}
          className='object-cover rounded-[32px] w-full h-full max-w-[656px] max-h-[960px] select-none'
        />
        <div className='bottom-8 max-w-[656px] absolute p-10 rounded-b-[32px] bg-white'>
          <Logo className='text-teal-900 h-8' />
          <p className='text-gray-700 font-medium text-xl mt-6'>
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
