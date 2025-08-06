import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '../../app/utils/cn';
import type React from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';

interface ModalProps {
  title: string;
  open: boolean;
  children: React.ReactNode;
  onClose?(): void;
  rightAction?: React.ReactNode;
}

export default function Modal({
  children,
  open,
  title,
  rightAction,
  onClose,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'z-50 fixed inset-0 bg-black/80 backdrop-blur-sm',
            'data-[state=open]:animate-overlay-show'
          )}
        />
        <Dialog.Content
          className={cn(
            'top-1/2 left-1/2 z-[51] fixed space-y-10 bg-white shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] p-6 rounded-2xl w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2',
            'data-[state=open]:animate-content-show'
          )}>
          <header className='flex justify-between items-center outline-none h-12 text-gray-800'>
            <button
              onClick={onClose}
              className='flex justify-center items-center outline-none w-12 h-12'>
              <Cross2Icon className='w-6 h-6' />
            </button>
            <Dialog.Title className='font-bold text-lg tracking-[-1px]'>
              {title}
            </Dialog.Title>
            <div className='flex justify-center items-center outline-none w-12 h-12'>
              {rightAction}
            </div>
          </header>
          <div>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
