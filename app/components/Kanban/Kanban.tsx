'use client';

/* Types */
import { task } from '@/app/types/tasks';

/* Instruments */
import styles from './kanban.module.css';

/* Components */
import Task from './partials/Task';

const Kanban = ({ data = [] }: { data?: Array<task> }) => {
  const groupedTasks = data.reduce(
    (acc, current) =>
      acc.set(current.column, [...(acc.get(current.column) || []), current]),
    new Map()
  );

  return (
    <div className={styles.board}>
      <div>
        <header>to do</header>
        <div className={styles.lane}>
          {groupedTasks.get('todo').map((task: task) => (
            <Task
              currentSwimlane={task.column}
              label={task.label}
              key={`${task.column}-${task.label}`}
            />
          ))}
        </div>
      </div>
      <div>
        <header>done</header>
        <div className={styles.lane}>
          {groupedTasks.get('done').map((task: task) => (
            <Task
              currentSwimlane={task.column}
              label={task.label}
              key={`${task.column}-${task.label}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kanban;
