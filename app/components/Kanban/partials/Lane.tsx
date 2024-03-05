/* Types */
import type { columns } from '@/app/types/tasks';
import type { DragEvent } from 'react';

/* Instruments */
import styles from '../kanban.module.css';

type laneProps = {
  columnId: columns;
  dropHandler: (e: DragEvent, columnId: columns) => void;
  dragOverHandler: (e: DragEvent) => void;
  children: JSX.Element;
};

type columnLabelMapType = {
  [key in columns]: string;
};

const columnLabelMap: columnLabelMapType = {
  todo: 'To do',
  done: 'Done',
};

const Lane = ({
  columnId,
  dropHandler,
  dragOverHandler,
  children,
}: laneProps) => {
  return (
    <div>
      <header>{columnLabelMap[columnId as keyof typeof columnLabelMap]}</header>
      <div
        className={styles.lane}
        onDrop={(e) => dropHandler(e, columnId)}
        onDragOver={dragOverHandler}>
        {children}
      </div>
    </div>
  );
};

export default Lane;
