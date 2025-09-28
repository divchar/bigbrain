'use client';
import * as React from 'react';

import { api } from '../../convex/_generated/api';

import DocumentCard from './document-card';
import CreateDocumentButton from './create-document-button';
import { useQuery } from 'convex/react';

export default function Home() {
  const documents = useQuery(api.documents.getDocuments);

  return (
    <main className='container mx-auto min-h-screen mt-20 space-y-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl font-bold'>My Documents</h1>
        <CreateDocumentButton />
      </div>

      <div className='grid grid-cols-4 gap-8'>
        {documents?.map((doc) => (
          <DocumentCard document={doc} key={doc._id} />
        ))}
      </div>
    </main>
  );
}
