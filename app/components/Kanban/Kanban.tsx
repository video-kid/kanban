'use client';

/* Core */
import { useState } from 'react';

/* Types */
import type { columns, task } from '@/app/types/tasks';
import type { DragEvent } from 'react';

/* Instruments */
import styles from './kanban.module.css';

/* Components */
import Lane from './partials/Lane';
import Task from './partials/Task';

type groupedTasksMapType = Map<columns, Array<task>>;

const getGroupedTasks = (data: Array<task>): groupedTasksMapType =>
  data.reduce(
    (acc, current) =>
      acc.set(current.column, [...(acc.get(current.column) || []), current]),
    new Map()
  );

const Kanban = ({ data = [] }: { data?: Array<task> }) => {
  const [tasks, setTasks] = useState<groupedTasksMapType>(
    getGroupedTasks(data)
  );

  const dropHandler = (e: DragEvent, columnId: columns) => {
    e.preventDefault();
    if (!e.dataTransfer) return;

    const data = JSON.parse(e.dataTransfer.getData('text/html'));

    setTasks((prev) => {
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
    });
  };

  const dragOverHandler = (e: DragEvent) => {
    e.preventDefault();
    if (!e.dataTransfer) return;
    e.dataTransfer.dropEffect = 'move';
  };

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
