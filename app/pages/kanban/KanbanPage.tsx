'use client';

/* Components */
import Kanban from '@/app/components/Kanban/Kanban';

/* Types */
import type { task } from '@/app/types/tasks';

/* Instruments */
import { useFetcher } from '@/app/hooks/useFetcher/useFetcher';
import useSWR from 'swr';

type tasksApi = {
  data: Array<task>;
  isLoading: boolean;
  error: any;
};

export const KanbanPage = () => {
  const fetcher = useFetcher<tasksApi>();
  const { data, error, isLoading } = useSWR<tasksApi>('api/tasks', fetcher);

  if (isLoading) return <>...Loading</>;
  if (error) return <>err</>;

  return (
    <>
      <h2>Kanban</h2>
      <Kanban data={data?.data} />
    </>
  );
};
