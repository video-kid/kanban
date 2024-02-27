/* Types */
import type { columns, task, groupedTasksMapType } from '@/app/types/tasks';

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
