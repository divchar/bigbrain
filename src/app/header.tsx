import React from 'react';
import HeaderActions from './header-actions';

import ModeToggle from '@/components/ui/mode-toggle';

export default function Header() {
  return (
    <main className='container mx-auto flex justify-between items-center mt-10'>
      <div>
        <h1 className='text-3xl font-extralight'>
          <span className='font-bold'>Big</span> Brain
        </h1>
      </div>
      <div className='flex items-center space-x-4'>
        <HeaderActions />
        <div className='cursor-pointer'>
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}
