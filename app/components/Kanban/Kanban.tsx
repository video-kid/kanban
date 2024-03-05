'use client';

/* Core */
import { useState } from 'react';

/* Types */
import type { columns, task, groupedTasksMapType } from '@/app/types/tasks';
import type { DragEvent } from 'react';

/* Instruments */
import styles from './kanban.module.css';

/* Components */
import Lane from './partials/Lane';
import Task from './partials/Task';
import { getGroupedTasks, updateTasks } from './utils';

const Kanban = ({ data = [] }: { data?: Array<task> }) => {
  const [tasks, setTasks] = useState<groupedTasksMapType>(
    getGroupedTasks(data)
  );

  const dropHandler = (e: DragEvent, columnId: columns) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('text/html'));
    setTasks((prev: groupedTasksMapType) => updateTasks(prev, data, columnId));
  };

  const dragOverHandler = (e: DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };
  console.log(tasks);
  return (
    <div className={styles.board}>
      {[...tasks.keys()].map((columnKey) => (
        <Lane
          columnId={columnKey}
          dropHandler={dropHandler}
          dragOverHandler={dragOverHandler}
          key={columnKey}>
          <>
            {(tasks.get(columnKey) || []).map((task) => (
              <Task
                task={task}
                key={task.id}
              />
            ))}
          </>
        </Lane>
      ))}
    </div>
  );
};

export default Kanban;
