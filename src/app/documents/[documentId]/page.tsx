'use client';

import React from 'react';

import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';

export default function DocumentPage({
  params,
}: {
  params: { documentId: Id<'documents'> };
}) {
  const document = useQuery(api.documents.getDocument, {
    documentId: params.documentId,
  });

  if (!document) {
    return (
      <div>
        <p>You don`&apos;`t have access to review this document</p>
      </div>
    );
  }
  return (
    <main className='mx-48 mt-20 space-y-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl font-bold'>{document.title}</h1>
      </div>
      <div className='flex gap-12'>
        <div className='bg-gray-900 p-4 rounded flex-1 h-[600px]'>
          {document.documentUrl && (
            <iframe className='w-full h-full' src={document.documentUrl} />
          )}
        </div>
        <div className='w-[300px] bg-gray-900'></div>
      </div>
    </main>
  );
}
