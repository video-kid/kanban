'use client';

/* Types */
import { task } from '@/app/types/tasks';

/* Instruments */
import styles from './kanban.module.css';

/* Components */
import Lane from './partials/Lane';
import Task from './partials/Task';
import { useState } from 'react';

type groupedTasksMapType = Map<any, any>;

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

  const dropHandler = (e: any, columnId: string) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('text/html'));

    setTasks((prev) => {
      const updatedSourceArray = [...prev.get(data.column)].filter(
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

  const dragOverHandler = (e: any) => {
    e.preventDefault();
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
          {tasks.get(columnKey).map((task: task) => (
            <Task
              task={task}
              key={task.id}
            />
          ))}
        </Lane>
      ))}
    </div>
  );
};

export default Kanban;
