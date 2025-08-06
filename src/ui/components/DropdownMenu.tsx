import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import type React from 'react';
import { cn } from '../../app/utils/cn';

export function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
}

export function DropdownMenuTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RdxDropdownMenu.Trigger asChild className='outline-none'>
      {children}
    </RdxDropdownMenu.Trigger>
  );
}

interface DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
}

export function DropdownMenuContent({
  children,
  className,
}: DropdownMenuContentProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        sideOffset={10}
        collisionPadding={10}
        className={cn(
          'z-[99] space-y-2 bg-white shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] p-2 rounded-2xl',
          'data=[side=bottom]:animate-slide-up-and-fade',
          'data=[side=top]:animate-slide-down-and-fade',
          className
        )}>
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}

interface DropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
  onSelect?(): void;
}

export function DropdownMenuItem({
  children,
  className,
  onSelect,
}: DropdownMenuItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        'flex items-center data-[highlighted]:bg-gray-50 px-4 py-2 rounded-2xl outline-none min-h-[40px] text-gray-800 text-sm transition-colors cursor-pointer',
        className
      )}>
      {children}
    </RdxDropdownMenu.Item>
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
};
