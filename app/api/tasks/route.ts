import { task } from '../../types/tasks';
import { NextResponse } from 'next/server';

const tasksList: Array<task> = [
  { label: 'task1', column: 'todo' },
  { label: 'task2', column: 'todo' },
  { label: 'task4', column: 'done' },
  { label: 'task5', column: 'todo' },
  { label: 'task6', column: 'todo' },
  { label: 'task7', column: 'todo' },
];

const handler = () => {
  return NextResponse.json({ data: tasksList });
};

export { handler as GET };
