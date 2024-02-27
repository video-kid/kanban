/* Instruments */
import styles from '../kanban.module.css';

/* Types */
import type { task } from '@/app/types/tasks';
import type { DragEvent } from 'react';

type taskProps = {
  task: task;
};

const Task = ({ task }: taskProps) => {
  const dragStartHandler = (e: DragEvent) => {
    e.preventDefault();
    if (!e.dataTransfer) return;
    e.dataTransfer.setData('text/html', JSON.stringify(task));
    e.dataTransfer.dropEffect = 'move';
  };

  return (
    <div
      className={styles.task}
      draggable='true'
      onDragStart={dragStartHandler}>
      {task.label}
      {task.column}
      {task.id}
    </div>
  );
};

export default Task;
