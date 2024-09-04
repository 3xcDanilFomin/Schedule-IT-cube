import { ILesson } from '../../../../types/types';
import styles from './style.module.scss';

export const ScheduleItem: React.FC<ILesson> = ({
  startTime,
  endTime,
  subject,
  roomNumber,
  groupName,
}) => {
  return (
    <li className={styles['schedule__item']}>
      <div className={styles['schedule__left']}>
        <span className={styles['schedule__time']}>{startTime}</span>
        <span className={styles['schedule__indicator']}></span>
        <span className={styles['schedule__time']}>{endTime}</span>
      </div>
      <div className={styles['schedule__right']}>
        <div className={styles['schedule__right-top']}>
          <h2 className={styles['schedule__direction']}>{subject}</h2>
          <span
            className={styles['schedule__office']}
          >{`${roomNumber} кабинет`}</span>
        </div>
        <span className={styles['schedule__group']}>{`Группа: ${groupName}`}</span>
      </div>
    </li>
  );
};
