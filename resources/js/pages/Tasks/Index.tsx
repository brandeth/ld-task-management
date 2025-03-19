import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type Task } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Tasks',
    href: '/tasks',
  },
];

export default function Index({ tasks }: { tasks: Task[] }) {
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
            {tasks.map((task: Task) => (
              <TableRow key={task.id}>
                <TableCell>{task.name}</TableCell>
                <TableCell className={task.is_completed ? 'text-green-600' : 'text-red-700'}>
                  {task.is_completed ? 'Completed' : 'In Progress'}
                </TableCell>
                <TableCell>Action Button</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AppLayout>
  );
}
