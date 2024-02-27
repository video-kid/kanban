export type columns = 'todo' | 'done';

export type task = {
  label: string;
  column: columns;
  id: string;
};

export type groupedTasksMapType = Map<columns, Array<task>>;
