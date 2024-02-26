/* Instruments */
import styles from '../kanban.module.css';

type taskProps = {
  label: string;
  currentSwimlane: string;
};

const Task = ({ label, currentSwimlane }: taskProps) => {
  return (
    <div className={styles.task}>
      {label}
      {currentSwimlane}
    </div>
  );
};

export default Task;
