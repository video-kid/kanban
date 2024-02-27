export type columns = 'todo' | 'done';

export type task = {
  label: string;
  column: columns;
  id: string;
};
