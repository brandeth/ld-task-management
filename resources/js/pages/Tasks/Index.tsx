import { Button, buttonVariants } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type Task } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Tasks',
    href: '/tasks',
  },
];

export default function Index({ tasks }: { tasks: Task[] }) {
  const deleteTask = (id: number) => {
    if (confirm('Are you sure you want to delete this task?')) {
      router.delete(route('tasks.destroy', id));
      toast.success('Task deleted successfully.');
    }
  };

  const handleDeleteTask = (id: number) => () => deleteTask(id);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Tasks" />

      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <div>
          <Link className={buttonVariants({ variant: 'outline' })} href="/tasks/create">
            Create Task
          </Link>
        </div>

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
                <TableCell className="flex flex-row gap-x-2 text-right">
                  <Button variant="destructive" className="cursor-pointer" onClick={handleDeleteTask(task.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AppLayout>
  );
}
