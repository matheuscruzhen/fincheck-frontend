import * as RdxPopover from '@radix-ui/react-popover';
import type React from 'react';
import { cn } from '../../app/utils/cn';

export function PopoverRoot({ children }: { children: React.ReactNode }) {
  return <RdxPopover.Root>{children}</RdxPopover.Root>;
}

export function PopoverTrigger({ children }: { children: React.ReactNode }) {
  return (
    <RdxPopover.Trigger asChild className='outline-none'>
      {children}
    </RdxPopover.Trigger>
  );
}

interface PopoverContentProps {
  children: React.ReactNode;
  className?: string;
}

export function PopoverContent({ children, className }: PopoverContentProps) {
  return (
    <RdxPopover.Portal>
      <RdxPopover.Content
        sideOffset={10}
        collisionPadding={10}
        className={cn(
          'z-[99] space-y-2 bg-white shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] p-4 rounded-2xl',
          'data=[side=bottom]:animate-slide-up-and-fade',
          'data=[side=top]:animate-slide-down-and-fade',
          className
        )}>
        {children}
      </RdxPopover.Content>
    </RdxPopover.Portal>
  );
}

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
};
