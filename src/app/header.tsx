import ModeToggle from '@/components/ui/mode-toggle';
import { UserButton, SignInButton } from '@clerk/nextjs';

import { Authenticated, Unauthenticated, useQuery } from 'convex/react';
import React from 'react';
import { api } from '../../convex/_generated/api';

export default function Header() {
  return (
    <main className='container mx-auto flex justify-between items-center'>
      <div>
        <h1 className='text-3xl font-extralight'>
          <span className='font-bold'>Big</span> Brain
        </h1>
      </div>
      <div className='flex items-center space-x-4'>
        <div>
          <Authenticated>
            <UserButton />
            {/* <Content /> */}
          </Authenticated>
          <Unauthenticated>
            <SignInButton>
              <button className='text-slate-50 bg-slate-700 py-2 px-4 rounded-full cursor-pointer'>
                Sign In
              </button>
            </SignInButton>
          </Unauthenticated>
        </div>
        <div className='cursor-pointer'>
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}

// function Content() {
//   const messages = useQuery(api.messages.getForCurrentUser);
//   return <div>Authenticated content: {messages?.length}</div>;
// }
