/* Types */
import type { columns, task, groupedTasksMapType } from '@/app/types/tasks';
import type { DragEvent } from 'react';

export const updateTasks = (
  prev: groupedTasksMapType,
  data: task,
  columnId: columns
) => {
  const updatedSourceArray = [...(prev.get(data.column) || [])].filter(
    ({ id }) => id !== data.id
  );
  const updatedDestinationArray = [
    ...(prev.get(columnId) || []),
    { ...data, column: columnId },
  ];

  prev.set(data.column, updatedSourceArray);
  const updatedMap = new Map(prev).set(columnId, updatedDestinationArray);
  return updatedMap;
};

export const getHoverAbove = (e: DragEvent) => {
  setTimeout(() => {
    if (!(e.target instanceof HTMLDivElement)) {
      return;
    }
    console.log(e.target.dataset);
  }, 1500);
};

export const getGroupedTasks = (data: Array<task>): groupedTasksMapType =>
  data.reduce(
    (acc, current) =>
      acc.set(current.column, [...(acc.get(current.column) || []), current]),
    new Map()
  );
