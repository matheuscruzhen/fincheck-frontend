import { Outlet } from 'react-router';
import illustration from '../../assets/illustration.png';

export function AuthLayout() {
  return (
    <div className='flex w-full h-full'>
      <div className='w-1/2 h-full'>
        <Outlet />
      </div>
      <div className='w-1/2 h-full flex justify-center items-center p-8 relative'>
        <img
          src={illustration}
          className='object-cover rounded-[32px] w-full h-full max-w-[656px] max-h-[960px] select-none'
        />
        <div className='bottom-8 max-w-[656px] absolute p-10 rounded-b-[32px] bg-white'>
          <p>
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
