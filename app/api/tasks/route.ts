/* Types */
import type { task } from '../../types/tasks';

/* Core */
import { NextResponse } from 'next/server';

const tasksList: Array<task> = [
  { label: 'task1', column: 'todo', id: '1' },
  { label: 'task2', column: 'todo', id: '2' },
  { label: 'task4', column: 'done', id: '3' },
  { label: 'task5', column: 'todo', id: '4' },
  { label: 'task6', column: 'todo', id: '5' },
  { label: 'task7', column: 'todo', id: '6' },
];

const handler = () => {
  return NextResponse.json({ data: tasksList });
};

export { handler as GET };
