import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Tasks',
    href: '/tasks',
  },
];

export default function Index() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Tasks" />

      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <Table className={'mt-4'}>
          <TableHeader>
            <TableRow>
              <TableHead>Tasks</TableHead>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead className="w-[150px]">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow key={1}>
              <TableCell>Meal Prep</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>Action Button</TableCell>
            </TableRow>
            <TableRow key={2}>
              <TableCell>City Promo Board</TableCell>
              <TableCell>In Progress</TableCell>
              <TableCell>Action Button</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </AppLayout>
  );
}
