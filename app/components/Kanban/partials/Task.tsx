/* Instruments */
import { task } from '@/app/types/tasks';
import styles from '../kanban.module.css';

type taskProps = {
  task: task;
};

const Task = ({ task }: taskProps) => {
  const dragStartHandler = (e: any) => {
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
