/* Types */
import { task } from '@/app/types/tasks';

/* Instruments */
import styles from '../kanban.module.css';

/* Components */
import Task from './Task';

type laneProps = {
  columnId: string;
  dropHandler: (e: any, columnId: string) => void;
  dragOverHandler: (e: any) => void;
  children: JSX.Element;
};

const columnLabelMap = {
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
