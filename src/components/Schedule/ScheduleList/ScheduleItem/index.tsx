import { ISchedule } from '../../../../types/types';
import styles from './style.module.scss';

export const ScheduleItem: React.FC<ISchedule> = ({
  startTime,
  endTime,
  directions,
  office,
  group,
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
          <h2 className={styles['schedule__direction']}>{directions}</h2>
          <span
            className={styles['schedule__office']}
          >{`${office} кабинет`}</span>
        </div>
        <span className={styles['schedule__group']}>{`Группа: ${group}`}</span>
      </div>
    </li>
  );
};
