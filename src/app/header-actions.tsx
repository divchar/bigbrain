'use client';

import { UserButton, SignInButton } from '@clerk/nextjs';
import { Authenticated, Unauthenticated, AuthLoading } from 'convex/react';
import React from 'react';

export default function HeaderActions() {
  return (
    <main>
      <div>
        <Authenticated>
          <UserButton />
        </Authenticated>

        <Unauthenticated>
          <SignInButton>
            <button className='text-slate-50 bg-slate-700 py-2 px-4 rounded-full cursor-pointer'>
              Sign In
            </button>
          </SignInButton>
        </Unauthenticated>

        <AuthLoading>Loading...</AuthLoading>
      </div>
    </main>
  );
}
