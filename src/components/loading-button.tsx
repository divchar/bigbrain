import { Loader2 } from 'lucide-react';
import React, { ReactNode } from 'react';
import { Button } from './ui/button';

export default function LoadingButton({
  isLoading,
  children,
  loadingText,
}: {
  isLoading: boolean;
  children: ReactNode;
  loadingText: string;
}) {
  return (
    <div>
      {' '}
      <Button
        className='flex gap-1 items-center'
        disabled={isLoading}
        type='submit'
      >
        {isLoading && <Loader2 className='animate-spin' />}
        {isLoading ? loadingText : children}
      </Button>
    </div>
  );
}
