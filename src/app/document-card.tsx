import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Doc } from '../../convex/_generated/dataModel';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import Link from 'next/link';

export default function DocumentCard({
  document,
}: {
  document: Doc<'documents'>;
}) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{document.title}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button
            asChild
            variant='secondary'
            className='flex items-center space-x-2'
          >
            <Link href={`/documents/${document._id}`}>
              <Eye className='w-4 h-4' /> View
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
