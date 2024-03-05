import { expect, test } from 'vitest';
import { getGroupedTasks } from '../utils';
import { task } from '@/app/types/tasks';

const data: Array<task> = [
  { label: 'task1', column: 'todo', id: '1' },
  { label: 'task2', column: 'todo', id: '2' },
  { label: 'task4', column: 'done', id: '3' },
  { label: 'task5', column: 'todo', id: '4' },
  { label: 'task6', column: 'todo', id: '5' },
  { label: 'task7', column: 'todo', id: '6' },
];

const groupedTasks = new Map([
  [
    'todo',
    [
      {
        label: 'task1',
        column: 'todo',
        id: '1',
      },
      {
        label: 'task2',
        column: 'todo',
        id: '2',
      },
      {
        label: 'task5',
        column: 'todo',
        id: '4',
      },
      {
        label: 'task6',
        column: 'todo',
        id: '5',
      },
      {
        label: 'task7',
        column: 'todo',
        id: '6',
      },
    ],
  ],
  [
    'done',
    [
      {
        label: 'task4',
        column: 'done',
        id: '3',
      },
    ],
  ],
]);

test('adds 1 + 2 to equal 3', () => {
  expect(getGroupedTasks(data)).toStrictEqual(groupedTasks);
});
